<%- lib.renderOpening() %>

## Background

Caffee Stazione ~~has~~ had an aging menu-driven touchscreen POS system.

![Menu screen](/readme-files/menu-screen.jpg)

This system presented two key pain points causing a slow ordering experience for customers:

1. Learning curve associated with locating items within the menu system
2. Locating items customers would describe differently to the name used within the menu system

As a little side-project, I decided to build a "side-car" application to assist with locating items within the POS system.

The key features designed to alleviate the pain points include:

1. Ability to search the menu system and present a visualisation highlighting the sequence of button taps required to locate an item
2. Ability to search using alternate keywords assigned to items

## Tech Stack

- [React](https://react.dev)
- [Node Test](https://nodejs.org/api/test.html). That's right - React without Jest!
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- 🚫 No State Management library. Higher order component handles state changes via callback.

## Architecture

<%- await lib.renderModuleDiagram() %>
