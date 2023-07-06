---
layout: layouts/base.njk
templateEngine: njk, md
bodyClass: about
title: Over Radio Rosita
menu:
    visible: true
    order: 2
    title: Over Rosita
---
{% from "macros.njk" import image_2_column %}

<section class="hero [ region row fullwidth ]">
    <div class="hero__image">
        <div class="hero__content flow">
            <h1 class="text--center">{{ title }}</h1>
        </div>
    </div>
</section>

{{ body | md | safe }}