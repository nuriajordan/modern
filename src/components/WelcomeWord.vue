<template>
  <div>
    <div class="title">
      <h1>AGENDA</h1>
    </div>
    <div class="intro">
      <h2>{{</h2>
    </div>
    <div class="cos">
      <p>Cinema Truffaut Sala 1. El inocente 21h</p>
    </div>
    <div class="flex">
      <div class="img"></div>
      <div class="qr"></div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.title {
  font-size: 40px;
  background-color: aquamarine;
  animation-duration: 4s;
  animation-name: slidein;
}
@keyframes slidein {
  from {
    margin-left: -100%;
    width: 100%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

.intro {
  font-size: 20px;
  background-color: bisque;
  animation-duration: 4s;
  animation-name: slideon;
}
@keyframes slideon {
  from {
    margin-left: -100%;
    width: 100%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

.img {
  background-color: red;
  width: 400px;
  height: 400px;
}

.qr {
  background-color: blue;
  width: 400px;
  height: 400px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>