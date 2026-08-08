$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // toc sidebar toggle
  if ($("#toc-toggle").length) {
    var $tocRow = $("#toc-row");
    var $tocToggle = $("#toc-toggle");
    var $tocMobilePanel = $("#toc-mobile-panel");
    var $tocMobileBackdrop = $("#toc-mobile-backdrop");
    var $tocMobileBody = $tocMobilePanel.find(".toc-mobile-body");

    function openMobileToc() {
      if (!$tocMobileBody.children().length) {
        var nav = document.querySelector("#toc-sidebar");
        if (nav) {
          $tocMobileBody.html(nav.innerHTML);
        }
      }
      $tocMobilePanel.addClass("open");
      $tocMobileBackdrop.addClass("open");
      $("body").addClass("toc-panel-open");
      var closeBtn = document.getElementById("toc-mobile-close");
      if (closeBtn) closeBtn.focus();
    }

    function closeMobileToc() {
      $tocMobilePanel.removeClass("open");
      $tocMobileBackdrop.removeClass("open");
      $("body").removeClass("toc-panel-open");
    }

    if (localStorage.getItem("tocHidden") === "1") {
      $tocRow.addClass("toc-hidden");
      $tocToggle.attr("aria-expanded", "false");
    }

    $tocToggle.on("click", function () {
      if (window.innerWidth <= 576) {
        openMobileToc();
      } else {
        $tocRow.toggleClass("toc-hidden");
        $tocToggle.attr("aria-expanded", String(!$tocRow.hasClass("toc-hidden")));
        localStorage.setItem("tocHidden", $tocRow.hasClass("toc-hidden") ? "1" : "0");
      }
    });

    $("#toc-mobile-close").on("click", closeMobileToc);
    $tocMobileBackdrop.on("click", closeMobileToc);
    $tocMobileBody.on("click", "a", closeMobileToc);
    $(document).on("keyup", function (e) {
      if (e.key === "Escape") closeMobileToc();
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let theme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });
});
