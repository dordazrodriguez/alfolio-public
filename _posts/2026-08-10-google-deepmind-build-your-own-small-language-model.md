---
layout: post
title: "Google DeepMind: Building a Small Language Model"
date: 2026-08-10
tags: [technology, AI, ML, NLP, DeepMind, LLM, education]
categories: [experience]
description: "Completing Course 01 of the Google DeepMind AI Research Foundations path — building a small language model from scratch."
---

## Course Overview

Completed [**Build Your Own Small Language Model**](https://www.skills.google/paths/3135/course_templates/1341) as part of the [Google DeepMind AI Research Foundations](https://www.skills.google/paths/3135) learning path. This course covers the fundamentals of language modeling — from probability distributions and n-gram models to transformer-based architectures and dataset preparation for training small language models (SLMs).

**Badge:** 

[![Google Skills Badge]({{ '/assets/img/gdm-badge.png' | relative_url }}){: width="300" }](https://www.skills.google/public_profiles/35711ba7-11ee-411f-b8ff-09a6e696eb3f/badges/26551425)

[View badge on Google Skills](https://www.skills.google/public_profiles/35711ba7-11ee-411f-b8ff-09a6e696eb3f/badges/26551425)

## Labs Completed

### Lab 1.1 — Create Your Own Probability Distribution

Explored the foundations of probability distributions for language modeling. Learned how to construct and sample from discrete distributions, which form the mathematical basis for how language models predict the next token.

**Key concepts:**
- Discrete probability distributions over vocabularies
- Sampling from distributions
- How probability distributions relate to language model outputs

� [View notebook in browser]({{ '/assets/notebook_html/gdm/gdm_lab_1_1_create_your_own_probability_distribution.html' | relative_url }}){: target="_blank" } · [📄 Download .ipynb]({{ '/assets/notebooks/gdm/gdm_lab_1_1_create_your_own_probability_distribution.ipynb' | relative_url }})

---

### Lab 1.2 — Experiment with N-Gram Models

Built character-level and word-level n-gram language models from scratch. Implemented n-gram counting, probability estimation, and text generation using both random sampling and greedy decoding.

**Key concepts:**
- N-gram model construction and counting
- Conditional probability estimation: P(next_token \| context)
- Text generation via random sampling and greedy argmax
- Limitations of n-gram models (sparsity, context window)

� [View notebook in browser]({{ '/assets/notebook_html/gdm/gdm_lab_1_2_experiment_with_n_gram_models.html' | relative_url }}){: target="_blank" } · [📄 Download .ipynb]({{ '/assets/notebooks/gdm/gdm_lab_1_2_experiment_with_n_gram_models.ipynb' | relative_url }})

---

### Lab 1.3 — Compare N-Gram Models and Transformer Language Models

Compared the performance of n-gram models against transformer-based language models. Explored how transformers overcome the sparsity and context limitations of n-grams through self-attention mechanisms.

**Key concepts:**
- Self-attention and positional encoding
- Transformer architecture for language modeling
- Performance comparison: n-gram vs. transformer
- Trade-offs between model complexity and quality

� [View notebook in browser]({{ '/assets/notebook_html/gdm/gdm_lab_1_3_compare_n_gram_models_and_transformer_language_models.html' | relative_url }}){: target="_blank" } · [📄 Download .ipynb]({{ '/assets/notebooks/gdm/gdm_lab_1_3_compare_n_gram_models_and_transformer_language_models.ipynb' | relative_url }})

---

### Lab 1.4 — Prepare the Dataset for Training a SLM

Learned how to prepare text data for training a small language model. Covered tokenization, encoding, sequence segmentation with overlapping windows, and creating input-target pairs for transformer training.

**Key concepts:**
- Character-level tokenization and vocabulary building
- Encoding text to token indices and decoding back
- Segmenting long sequences into overlapping windows
- Creating padded input-target pairs for training

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

� [View notebook in browser]({{ '/assets/notebook_html/gdm/gdm_lab_1_4_prepare_the_dataset_for_training_a_slm.html' | relative_url }}){: target="_blank" } · [📄 Download .ipynb]({{ '/assets/notebooks/gdm/gdm_lab_1_4_prepare_the_dataset_for_training_a_slm.ipynb' | relative_url }})

---

## Key Takeaways

1. **Probability is the foundation** — Language models are ultimately probability distributions over sequences, and understanding the basics is essential.
2. **N-grams are simple but limited** — They work for baseline text generation but suffer from sparsity and cannot capture long-range dependencies.
3. **Transformers solve the context problem** — Self-attention allows models to weigh all previous tokens, overcoming the fixed context window of n-grams.
4. **Data preparation is critical** — Proper tokenization, encoding, and segmentation with overlapping windows are essential steps before training any language model.

## Next Steps

The challenge lab ([documented here]({{ '/blog/2026/08/google-deepmind-slm-challenge-lab/' | relative_url }})) applied these concepts to build a character-based Arabic language model for a real-world scenario.
