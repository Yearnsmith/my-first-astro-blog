---
layout: ../../layouts/MarkdownPostLayout.astro
title: My Second Blog Post
author: Astro Learner
description: "This post will show up on its own!"
image:
    url: "https://docs.astro.build/default-og-image.png"
    alt: "The word astro against an illustration of planets and stars."
pubDate: 2022-08-08
tags: ["astro", "successes"]
preview: 'This post should show up with my other blog posts, because `import.meta.glob()` is returning a list of all my posts in order to create my list.'
slug: 'post-2'
prevPost: 'post-1'
nextPost: 'yet-another-blog-post'
---

This post should show up with my other blog posts, because `import.meta.glob()` is returning a list of all my posts in order to create my list.
