import React from "react";
import Aside from "./aside";
import Styles from "./layout.module.scss";
import { createContext, useState } from "react";

export const navContext = createContext({
  setNav: () => {}
});

export default function Layout({ children }) {
  // const nav = `<nav class="table-of-contents"><ol><li><a href="#typescript">TypeScript入门</a></li><li><a href="#">基础数据类型</a><ol><li><a href="#js">JS的八种内置类型</a></li><li><a href="#-1">注意点</a></li></ol></li><li><a href="#-2">其它类型</a><ol><li><a href="#array">Array</a></li><li><a href="#-3">函数</a><ol><li><a href="#-4">函数声明</a></li><li><a href="#-5">函数表达式</a></li><li><a href="#-6">用接口定义函数类型</a></li><li><a href="#-7">可选参数</a></li><li><a href="#-8">参数默认值</a></li><li><a href="#-9">剩余参数</a></li><li><a href="#-10">函数重载</a></li></ol></li><li><a href="#tuple">Tuple(元组)</a><ol><li><a href="#-11">元祖定义</a></li><li><a href="#-12">元祖类型的解构赋值</a></li><li><a href="#-13">元组类型的可选元素</a></li><li><a href="#-14">元组类型的剩余元素</a></li><li><a href="#-15">只读的元组类型</a></li></ol></li><li><a href="#void">void</a></li><li><a href="#never">never</a></li><li><a href="#any">any</a></li><li><a href="#unknown">unknown</a></li><li><a href="#numberstringbooleansymbol">Number、String、Boolean、Symbol</a></li><li><a href="#objectobject">object、Object 和 {}</a></li></ol></li><li><a href="#-16">类型推断</a></li><li><a href="#-17">类型断言</a><ol><li><a href="#-18">语法</a></li><li><a href="#-19">非空断言</a></li><li><a href="#-20">确定赋值断言</a></li></ol></li><li><a href="#-21">字面量类型</a><ol><li><a href="#-22">字符串字面量类型</a></li><li><a href="#-23">数字字面量类型及布尔字面量类型</a></li><li><a href="#letconst">let和const分析</a></li></ol></li><li><a href="#type-widening">类型拓宽(Type Widening)</a></li><li><a href="#type-narrowing">类型缩小(Type Narrowing)</a></li><li><a href="#-24">联合类型</a></li><li><a href="#-25">类型别名</a></li><li><a href="#-26">交叉类型</a></li><li><a href="#interfaces">接口（Interfaces）</a><ol><li><a href="#-27">什么是接口</a></li><li><a href="#-28">简单的例子</a></li><li><a href="#-29">可选 | 只读属性</a></li><li><a href="#-30">任意属性</a></li><li><a href="#-31">绕开额外属性检查的方式</a><ol><li><a href="#-32">鸭式辨型法</a></li><li><a href="#-33">类型断言</a></li><li><a href="#-34">索引签名</a></li></ol></li></ol></li><li><a href="#-35">接口与类型别名的区别</a><ol><li><a href="#objects-functions">Objects / Functions</a><ol><li><a href="#interface">Interface</a></li><li><a href="#type-alias">Type alias</a></li></ol></li><li><a href="#other-types">Other Types</a></li><li><a href="#-36">接口可以定义多次,类型别名不可以</a></li><li><a href="#-37">扩展</a><ol><li><a href="#-38">接口扩展接口</a></li><li><a href="#-39">类型别名扩展类型别名</a></li><li><a href="#-40">接口扩展类型别名</a></li><li><a href="#-41">类型别名扩展接口</a></li></ol></li></ol></li><li><a href="#-42">泛型</a><ol><li><a href="#-43">泛型约束</a></li><li><a href="#-44">泛型工具类型</a><ol><li><a href="#typeof">typeof</a></li><li><a href="#keyof">keyof</a></li><li><a href="#in">in</a></li><li><a href="#infer">infer</a></li><li><a href="#extends">extends</a></li><li><a href="#-45">索引类型</a></li><li><a href="#-46">映射类型</a></li><li><a href="#partial">Partial</a></li><li><a href="#deeppartial">DeepPartial</a></li><li><a href="#required">Required</a></li><li><a href="#readonly">Readonly</a></li><li><a href="#pick">Pick</a></li><li><a href="#record">Record</a></li><li><a href="#returntype">ReturnType</a></li><li><a href="#exclude">Exclude</a></li><li><a href="#extract">Extract</a></li><li><a href="#omit">Omit</a></li><li><a href="#nonnullable">NonNullable</a></li><li><a href="#parameters">Parameters</a></li></ol></li></ol></li><li><a href="#tsconfigjson">tsconfig.json</a><ol><li><a href="#tsconfigjson-1">tsconfig.json介绍</a></li><li><a href="#tsconfigjson-2">tsconfig.json 重要字段</a></li><li><a href="#compileroptions">compilerOptions 选项</a></li></ol></li><li><a href="#ts">编写高效 TS 代码的一些建议</a><ol><li><a href="#-47">尽量减少重复代码</a></li><li><a href="#-48">使用更精确的类型替代字符串类型</a></li><li><a href="#-49">定义的类型总是表示有效的状态</a></li></ol></li></ol></nav>`

  const [nav, setNav] = useState("");


  return (
    <navContext.Provider value={(value) => setNav(value)}>
      <div className={Styles.layout}>
        <aside className={Styles.leftAside}>
          <Aside />
        </aside>
        <main className={Styles.main}>{children}</main>
        <aside className={Styles.rightAside}>
          <div dangerouslySetInnerHTML={{ __html: nav }} />
        </aside>
      </div>
    </navContext.Provider>
  );
}
