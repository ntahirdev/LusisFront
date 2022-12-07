jQuery(document).ready(function() {
    // Golobal Varaibls
    const bodyEl = document.body.classList;
    //Home Text Fade Up-Down Function
    $(function() {
        $("#slideshow h4:gt(0)").removeClass("active");
        setInterval(function() {
            $("#slideshow :first-child")
                .removeClass("active")
                .next("h4")
                .addClass("active")
                .end()
                .appendTo("#slideshow");
        }, 1500);
    });

    $(function() {
        $("#slideshow-services h4:gt(0)").removeClass("active");
        setInterval(function() {
            $("#slideshow-services :first-child")
                .removeClass("active")
                .next("h4")
                .addClass("active")
                .end()
                .appendTo("#slideshow-services");
        }, 1500);
    });

    /**
     * Services Home
     */
    $(".home-section .left-arrow .menu div").click(function() {
        $(".home-section .left-arrow .menu div").removeClass("active");
        $(this).addClass("active");
        const $id = $(this).data("item");
        $(".home-section .benefits-section .toggle-items .left-arrow .arrow").attr(
            "data-category",
            $id
        );

        $(".home-section .toggle-items .toggle-content-image.active").removeClass(
            "active"
        );
        $(
            ".home-section .benefits-section .toggle-items .toggle-content-image#" +
            $id
        ).addClass("active");
    });
    //Equipe Js Start
    //Equipe Filter
    $(".team-section .parent-filter .filters ul li").click(function() {
        $(".team-section .parent-filter .filters ul li").removeClass("active");
        $(this).addClass("active");
    });

    $(".team-section .parent-filter .filters ul li").click(function() {
        const category = $(this).data("category");
        $(".team-section .parent-filter .filter-items .filter-item")
            .addClass("hide")
            .filter(category)
            .removeClass("hide");
    });
    // Start Search Filter Equipe
    $(".team-section .parent-filter .filters .search input").keyup(function(e) {
        const value = e.target.value.toLowerCase();
        const category = $(
            ".team-section .parent-filter .filters ul li.active"
        ).data("category");
        $(".team-section .parent-filter .filter-items .filter-item").each(
            function() {
                const text = $(this).find("h3.content-title").text().toLowerCase();
                if (!text.includes(value)) {
                    $(this).addClass("hide");
                }
                if (text.includes(value)) {
                    $(this).filter(category).removeClass("hide");
                }
            }
        );
    });
    /* End Search Filter Equipe */
    //Start Accordion Single Equipe
    if (bodyEl.contains("single-equipe")) {
        const accordionBtn = document.querySelectorAll(
            ".team-detail-text .description-content .team-text .accordion .item .accordionBtn"
        );
        const items = document.querySelector(
            ".team-detail-text .description-content .team-text .accordion .item"
        );
        const firstElActive = items.firstChild;
        firstElActive.parentElement.classList.add("active");
        firstElActive.parentElement.children[1].style.maxHeight =
            firstElActive.parentElement.children[1].scrollHeight + "px";

        accordionBtn.forEach((elem) => {
            elem.addEventListener("click", () => {
                let content = elem.nextElementSibling;
                let active = document.querySelector(".item.active");

                if (active) {
                    if (elem.parentElement.classList.contains("active")) {
                        elem.parentElement.classList.remove("active");
                        active.lastElementChild.style.maxHeight = "0";
                        active.lastElementChild.style.maxHeight = "0";
                    } else {
                        active.classList.remove("active");
                        active.lastElementChild.style.maxHeight = "0";

                        elem.parentElement.classList.add("active");
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                } else {
                    elem.parentElement.classList.add("active");
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
    }

    /* Accordion Single Equipe */
    //Global Search Effect
    $("li.share-icon").click(function() {
        $(".slide-up").toggleClass("active");
    });
    $("body > div").on("click", function(event) {
        $(".slide-up").removeClass("active");
    });
    $("li.lang-icon").click(function() {
        $(this).toggleClass("active");
    });
    //End Global SearchEffect
    /* End Js Equipe */
    /*Start JS Expertise*/
    /* Slider Section Busniness */
    //Slick Slider

    $(".custum-updates").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1161,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    // Custom Prev Next for Actualites
    $(
        ".expertise-single .latest-updates .header-updates .directions ul li.prev"
    ).click(function() {
        $(".expertise-single .latest-updates .updates").slick("slickPrev");
    });
    $(
        ".expertise-single .latest-updates .header-updates .directions ul li.next"
    ).click(function(e) {
        $(".expertise-single .latest-updates .updates").slick("slickNext");
    });

    /* End Js Expertise*/
    /* Start Js Insights*/
    //Filter Actualites
    $(".actualites .news-item .filters ul li").click(function() {
        $(".actualites .news-item .filters ul li").removeClass("active");
        $(this).addClass("active");
    });

    $(".actualites .news-item .filters ul li").click(function() {
        const category = $(this).data("category");
        $(".actualites .news-item .updates .filterindex")
            .addClass("hide")
            .filter(category)
            .removeClass("hide");
    });

    //Seach in Actualites
    $(".actualites .news-item .filters .search input").keyup(function(e) {
        const value = e.target.value.toLowerCase();
        const category = $(".actualites .news-item .filters ul li.active").data(
            "category"
        );
        $(".actualites .news-item .updates .parent-item").each(function() {
            const text = $(this).find(".description-text > p").text().toLowerCase();
            if (!text.includes(value)) {
                $(this).addClass("hide");
            }
            if (text.includes(value)) {
                $(this).filter(category).removeClass("hide");
            }
        });
    });
    /* End Js Expertise*/
    /* Start Js Expertise*/
    $(".image-info").click(function() {
        $(this).toggleClass("active");
    });
    /* End Js Expertise*/
    /* Back To Top Js*/
    //Back To Top

    $(".scroll-top a").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });
    /* End Back To Top Js*/
});