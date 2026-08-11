---
layout: post
title: "Google DeepMind: Training A Small Language Model — Challenge Lab"
date: 2026-08-10
tags: [technology, AI, ML, NLP, DeepMind, LLM, Arabic, education]
categories: [experience]
description: "Challenge lab for the Train A Small Language Model course — building and training a character-based Arabic language model for Cymbal Chat."
---

## Challenge Lab Overview

Completed the [**Challenge Lab**](https://www.skills.google/paths/3135/course_templates/1453/labs/600981) for the *Train A Small Language Model* course. The scenario: **Cymbal Chat**, an AI startup, wants to expand their chatbot to support Arabic — a language with very different grammar and character set compared to English. The task was to build and train a character-based language model pipeline for Arabic text.

**Badge:** [![Google Skills Badge]({{ '/assets/img/gdm-badge-train.png' | relative_url }}){: width="120" }](https://www.skills.google/public_profiles/35711ba7-11ee-411f-b8ff-09a6e696eb3f/badges/26553065)

�🔗 [View notebook in browser]({{ '/assets/notebook_html/gdm/gdm_challenge_lab.html' | relative_url }}){: target="_blank" } · [📄 Download .ipynb]({{ '/assets/notebooks/gdm/gdm_challenge_lab.ipynb' | relative_url }})

### Embedded Notebook

{% jupyter_notebook /assets/notebooks/gdm/gdm_challenge_lab.ipynb %}

---

## Scenario

Arabic presents unique challenges for NLP:
- **Right-to-left** text direction
- **Character-level morphology** — subwords attach to the beginning or end of words (e.g., كتاب = "book", كتابي = "my book", كتابك = "your book")
- **Diacritics** — optional markings above/below letters for vowel sounds
- Character-based models can outperform word-based models for Arabic due to this morphology

## Tasks Completed

### Task 1 — Helper Functions and Data Loading

Loaded a dataset of 200 Arabic children's stories and implemented preprocessing functions:

- `clean_bidi_chars()` — removes Unicode bidirectional control characters
- `remove_diacritics()` — strips Arabic diacritical marks to simplify text
- `display_arabic()` — formats Arabic text for terminal display with RTL override

```python
def clean_bidi_chars(text: str) -> str:
    bidi_chars = re.compile(r"[\u202A-\u202E\u2066-\u2069]")
    return bidi_chars.sub("", text)

def remove_diacritics(text: str) -> str:
    arabic_diacritics = re.compile(r"[\u064B-\u065F\u0670\u0640]")
    return arabic_diacritics.sub("", text)
```

---

### Task 2 — Character Tokenizer

Built `SimpleArabicCharacterTokenizer` with two methods:

- `character_tokenize(text)` — splits Arabic text into individual character tokens
- `join_text(tokens)` — rejoins character tokens back into a string

```python
class SimpleArabicCharacterTokenizer:
    def character_tokenize(self, text: str) -> list[str]:
        tokens = list(text)
        return tokens

    def join_text(self, tokens: list[str]) -> str:
        text = "".join(tokens)
        return text
```

**Test output:**
```
First line:  الشمس طلعت! بطة صغيرة تستيقظ...
Tokens:      ['ا', 'ل', 'ش', 'م', 'س', ' ', 'ط', 'ل', 'ع', 'ت', '!', ...]
Rejoined:    الشمس طلعت! بطة صغيرة تستيقظ...
```

---

### Task 3 — N-Gram Text Generator

Implemented `generate_text_from_ngram_model()` — a text generation function that uses an n-gram model with two sampling modes:

- **Random sampling** — samples next token from the probability distribution
- **Greedy sampling** — picks the token with highest probability

```python
def generate_text_from_ngram_model(
        start_prompt, n_tokens, ngram_model, tokenizer,
        sampling_mode="random"):
    
    start_tokens = tokenizer.character_tokenize(start_prompt)
    generated_tokens = start_tokens.copy()
    context_length = len(next(iter(ngram_model)))

    for _ in range(n_tokens):
        context = "".join(generated_tokens[-context_length:])
        if context not in ngram_model:
            break
        next_token_probs = ngram_model[context]
        
        if sampling_mode == "random":
            tokens = list(next_token_probs.keys())
            probs = list(next_token_probs.values())
            next_token = random.choices(tokens, weights=probs, k=1)[0]
        elif sampling_mode == "greedy":
            next_token = max(next_token_probs, key=next_token_probs.get)
        
        generated_tokens.append(next_token)

    return tokenizer.join_text(generated_tokens)
```

**Test output** (4-gram model, prompt: "يوم واحد"):
```
Generated: يوم واحدة. قاليوما أيته
```

---

### Task 4 — Dataset Preparation for Transformer Training

Implemented two functions to prepare data for training a character-based transformer:

**`segment_encoded_sequence()`** — breaks long token sequences into overlapping windows:

```python
def segment_encoded_sequence(sequence, max_length, n_overlap):
    step = max_length - n_overlap
    subsequences = []
    i = 0
    while i < len(sequence):
        segment = sequence[i : i + max_length]
        subsequences.append(segment)
        if i + max_length >= len(sequence):
            break
        i += step
    return subsequences
```

**`create_training_sequences()`** — encodes the full dataset, segments it, and creates padded input-target pairs:

```python
def create_training_sequences(dataset, context_length, n_overlap, tokenizer):
    segmentation_length = context_length + 1
    encoded_tokens = []
    
    for text in dataset:
        token_ids = tokenizer.encode(text)
        segments = segment_encoded_sequence(
            token_ids, max_length=segmentation_length, n_overlap=n_overlap)
        encoded_tokens.extend(segments)
    
    padded_sequences = keras.preprocessing.sequence.pad_sequences(
        encoded_tokens, maxlen=segmentation_length,
        padding="post", value=tokenizer.pad_token_id)
    
    inputs = padded_sequences[:, :-1]
    targets = padded_sequences[:, 1:]
    return inputs, targets
```

**Test output** (context_length=256, n_overlap=8):
```
inputs shape: (X, 256), targets shape: (X, 256)
```

---

## Summary

This challenge lab applied the concepts from all four preceding labs to a real-world scenario:

1. **Character tokenizer** for Arabic text with RTL support
2. **N-gram text generation** with random and greedy sampling
3. **Dataset segmentation** with overlapping windows for transformer training
4. **Training sequence creation** with proper input-target pairs and padding

The pipeline is now ready to train a character-based transformer language model for Arabic — addressing Cymbal Chat's goal of expanding to the Arabic-speaking market.

## References

- Mohamed, M. and Al-Azani, S. (2025). *Enhancing Arabic NLP Tasks through Character-Level Models and Data Augmentation.* COLING 2025. [Link](https://aclanthology.org/2025.coling-main.186.pdf)
- [Google DeepMind AI Research Foundations](https://www.skills.google/paths/3135)
- Previous course notes: [Build Your Own Small Language Model]({{ '/blog/2026/08/google-deepmind-build-your-own-small-language-model/' | relative_url }})
