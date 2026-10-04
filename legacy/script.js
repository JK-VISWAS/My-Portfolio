/* =========================================================
   PORTFOLIO INTERACTION LOGIC
   JOY VISWAS KOLLI
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       LOADER COUNTER
    ========================================================= */
    const loader = document.getElementById("loader");
    const loaderNumber = document.getElementById("loaderNumber");

    if (loader && loaderNumber) {
        let count = 0;
        const loading = setInterval(() => {
            count += Math.floor(Math.random() * 8) + 4;
            if (count >= 100) {
                count = 100;
                clearInterval(loading);
                loaderNumber.textContent = "100";
                setTimeout(() => {
                    loader.classList.add("hide");
                }, 450);
            } else {
                loaderNumber.textContent = String(count).padStart(2, "0");
            }
        }, 70);
    }


    /* =========================================================
       CUSTOM CURSOR & LIQUID FOLLOWER
    ========================================================= */
    const cursorDot = document.getElementById("cursorDot");
    const cursorRing = document.getElementById("cursorRing");
    const liquid = document.getElementById("liquid");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (cursorDot) {
            cursorDot.style.left = mouseX + "px";
            cursorDot.style.top = mouseY + "px";
        }

        if (liquid) {
            liquid.style.left = mouseX + "px";
            liquid.style.top = mouseY + "px";
        }
    });

    function animateCursor() {
        if (cursorRing) {
            ringX += (mouseX - ringX) * .12;
            ringY += (mouseY - ringY) * .12;

            cursorRing.style.left = ringX + "px";
            cursorRing.style.top = ringY + "px";
        }
        requestAnimationFrame(animateCursor);
    }
    animateCursor();


    /* =========================================================
       CURSOR HOVER STATES
    ========================================================= */
    if (cursorRing) {
        document.querySelectorAll("a, button, .skill, .project, .cert, .magnetic").forEach(el => {
            el.addEventListener("mouseenter", () => {
                cursorRing.classList.add("active");
            });

            el.addEventListener("mouseleave", () => {
                cursorRing.classList.remove("active");
            });
        });
    }


    /* =========================================================
       CLICK WATER RIPPLE
    ========================================================= */
    document.addEventListener("click", (e) => {
        const ripple = document.createElement("div");
        ripple.className = "ripple";
        ripple.style.left = e.clientX + "px";
        ripple.style.top = e.clientY + "px";
        document.body.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 1200);
    });


    /* =========================================================
       SCROLL PROGRESS BAR
    ========================================================= */
    const progressBar = document.getElementById("progress");

    window.addEventListener("scroll", () => {
        if (!progressBar) return;
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;
        progressBar.style.width = percentage + "%";
    });


    /* =========================================================
       STICKY NAVIGATION STYLING
    ========================================================= */
    const nav = document.getElementById("nav");

    window.addEventListener("scroll", () => {
        if (!nav) return;
        if (window.scrollY > 80) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });


    /* =========================================================
       SCROLL REVEAL ANIMATION
    ========================================================= */
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: .12 }
        );

        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add("visible"));
    }


    /* =========================================================
       PORTRAIT PARALLAX
    ========================================================= */
    const portrait = document.getElementById("portrait");

    document.addEventListener("mousemove", (e) => {
        if (!portrait || window.innerWidth < 900) return;
        const x = (e.clientX / window.innerWidth - .5) * 16;
        const y = (e.clientY / window.innerHeight - .5) * 16;
        portrait.style.transform = `translate(${x}px,${y}px)`;
    });


    /* =========================================================
       MAGNETIC BUTTONS
    ========================================================= */
    document.querySelectorAll(".magnetic").forEach(button => {
        button.addEventListener("mousemove", (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            button.style.transform = `translate(${x * .18}px,${y * .18}px)`;
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "translate(0,0)";
        });
    });


    /* =========================================================
       SMOOTH PROJECT TILT EFFECT
    ========================================================= */
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("mousemove", (e) => {
            if (window.innerWidth < 900) return;
            const rect = project.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateY = ((x / rect.width) - .5) * 3;
            const rotateX = ((y / rect.height) - .5) * -3;
            project.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        project.addEventListener("mouseleave", () => {
            project.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
        });
    });


    /* =========================================================
       HERO SCROLL PARALLAX
    ========================================================= */
    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {
        if (!hero) return;
        const scroll = window.scrollY;
        if (scroll < window.innerHeight) {
            hero.style.transform = `translateY(${scroll * .06}px)`;
            hero.style.opacity = Math.max(.4, 1 - scroll / 900);
        }
    });


    /* =========================================================
       PORTRAIT IMAGE FALLBACK
    ========================================================= */
    if (portrait) {
        portrait.addEventListener("error", () => {
            portrait.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85";
        });
    }


    /* =========================================================
       ACTIVE NAVIGATION SPY
    ========================================================= */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const top = section.offsetTop - 250;
            if (window.scrollY >= top) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.style.color = "#777777";
            if (link.getAttribute("href") === "#" + current) {
                link.style.color = "#111111";
            }
        });
    });


    /* =========================================================
       MOBILE MENU TOGGLE
    ========================================================= */
    const menu = document.querySelector(".menu");
    const links = document.querySelector(".nav-links");

    if (menu && links) {
        menu.addEventListener("click", () => {
            const isOpen = links.style.display === "flex";
            if (isOpen) {
                links.style.display = "none";
            } else {
                links.style.display = "flex";
                links.style.position = "absolute";
                links.style.top = "70px";
                links.style.right = "5vw";
                links.style.flexDirection = "column";
                links.style.background = "rgba(255,255,255,.96)";
                links.style.backdropFilter = "blur(20px)";
                links.style.padding = "25px";
                links.style.border = "1px solid rgba(0,0,0,.1)";
                links.style.borderRadius = "15px";
            }
        });
    }

});
