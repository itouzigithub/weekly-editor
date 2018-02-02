<template>
  <div class="app">
    <nav class="hd">
      <ul>
        <router-link tag="li" to="/weekly">i 周刊</router-link>
        <router-link tag="li" to="toutiao">i 头条</router-link>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
    overflow: hidden;
  }
  .app {
    height: 100%;
    overflow: hidden;
  }
  .holder {
    height: calc(100% - 50px);
    overflow-y: auto;
  }
  .hd {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
  }
  .hd li {
    display: inline-block;
    padding-left: 50px;
    cursor: pointer;
  }
  body {
    overflow-x: hidden;
  }
  #app-holder {
    outline: none;
  }
  .btn {
    position: fixed;
    top: 70px;
    right: 50px;
    width: 80px;
    height: 30px;
    cursor: pointer;
  }
  .btn-copy {
    top: 110px;
  }
  .uploader {
    position: absolute;
    opacity: 0;
    right: -100px;
  }
  #copy {
    position: absolute;
    opacity: 0;
    right: -100%;
  }
</style>