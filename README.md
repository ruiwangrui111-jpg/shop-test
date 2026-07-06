# Restaurant Ordering Page

A mobile-first restaurant ordering page built as a vibe coding demo with Codex.

Live demo:

https://ruiwangrui111-jpg.github.io/shop-test/

Staff demo:

https://ruiwangrui111-jpg.github.io/shop-test/staff.html

Repository:

https://github.com/ruiwangrui111-jpg/shop-test

## Overview

This demo starts from a simple idea: "build a restaurant ordering page." Through AI-assisted planning, implementation, browser testing, feedback, and iteration, it became a usable static ordering prototype.

The project is designed for a QR-code ordering scenario with separated customer and staff entry points. Customers can browse dishes, switch categories, add items to a cart, review order details, add a note, confirm the order, and review local order history. Staff can open a separate order board to manage submitted orders.

## Features

- Mobile-first restaurant ordering interface
- Category tabs for hot items, meals, snacks, drinks, desserts, and combos
- Add and remove dishes with quantity controls
- Sticky cart bar with total quantity and price
- Cart drawer with editable quantities and order note
- Order confirmation modal
- Success state with continue-order and clear-order actions
- Promo cards that jump to the related menu item
- Local order history stored with `localStorage`
- Separate `staff.html` order board with pending, in-progress, and completed states
- Order status transitions for lightweight restaurant workflow simulation
- Static HTML, CSS, and JavaScript with no build step

## Vibe Coding Process

This project demonstrates the vibe coding workflow:

1. Start from a rough product idea.
2. Clarify the target user, style, and feature scope through conversation.
3. Generate a working frontend prototype.
4. Test it in the browser.
5. Use visual feedback to fix interaction issues.
6. Initialize Git, push to GitHub, and publish with GitHub Pages.

One example iteration: the top "HOT" combo card looked clickable but did not do anything. After browser feedback, it was updated so tapping the promo card switches to the combo category and highlights the related dish.

Another iteration added a product workflow layer: submitted orders are saved locally, customers can review order history, and staff can move orders from pending to in-progress to completed.

The staff surface was later separated into `staff.html` so the customer-facing QR ordering page does not expose staff operations.

## How To Run Locally

Open `index.html` directly in a browser.

Open `staff.html` to view the staff order board.

No install, server, or build command is required.

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Pages

## Notes

This is a static prototype for demo and interview presentation purposes. It does not include a backend, real payment, or account login. Order history is persisted locally in the browser with `localStorage`.
