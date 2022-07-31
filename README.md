# Caffe Stazione Simulation


<p align="right">
    <code>0% cov</code>&nbsp;
    <code>389 sloc</code>&nbsp;
    <code>26 files</code>&nbsp;
    <code>0 deps</code>&nbsp;
    <code>20 dev deps</code>
</p>

A POS item locator side-car application and experiment with PURE COMPONENTS in React.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Background](#background)
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
2. Ability to assign keywords to items

## Architecture

###### <p align="right"><em>Can't see the diagram?</em> <a id="link-1" href="https://github.com/mattriley/stazione-simulation#user-content-link-1">View it on GitHub</a></p>
```mermaid
graph TD;
    components-->pureComponents;
    components-->menuReader;
    menuReader-->menu;
    menuReader-->util;
    pureComponents-->menuReader;
    pureComponents-->util;
    pureComponents-->config;
```
