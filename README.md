# Caffe Stazione Pos Simulator

<p align="right"><code>55.75% cov</code>&nbsp;<code>429 sloc</code>&nbsp;<code>28 files</code>&nbsp;<code>7 deps</code>&nbsp;<code>24 dev deps</code></p>

A POS simulator and experiment with PURE COMPONENTS in React.

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Background](#background)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

###### <p align="right"><em>Can't see the diagram?</em> <a id="link-1" href="https://github.com/mattriley/caffe-stazione-pos-simulator#user-content-link-1">View it on GitHub</a></p>
```mermaid
graph TD;
    components-->pureComponents;
    components-->menuReader;
    components-->io;
    pureComponents-->menuReader;
```
<p align="center">
  <em>This diagram was generated with <a href="https://github.com/mattriley/node-module-composer">Module Composer</a></em>
</p>
<br>
