当前目录的ui为vue3js + vant配置，使用webpack编译打包，与auto侧有大量的共享引用，且代码已非常混乱，故对ui进行了重构；
因重构的ui使用了vue3ts + elementplus，tsconfig配置与当前项目存在冲突，故ui作为一个独立的项目进行单独维护：
https://github.com/zzliux/assttyys_ui
将编译出来的产物复制到dist目录下即可使用
