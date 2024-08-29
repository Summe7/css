---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 个人导航
  text: 前端导航
  tagline: 个人前端导航页面
  image:
    src: /logo.png
    alt: 个人导航
  actions:
    - text: 个人导航
      link: /nav/
      theme: alt
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
