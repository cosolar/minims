<template>
  <section id="philosophy" class="section philosophy" aria-labelledby="philosophy-title">
    <div class="wrap">
      <div class="philosophy-grid">
        <div class="philosophy-copy">
          <p class="eyebrow" v-reveal>01 / 为什么极简</p>
          <h2 id="philosophy-title" v-reveal="60">少，不是空。<br />是把多余的东西拿掉。</h2>
          <p class="section-lead" v-reveal="120">
            软件越做越大，功能越叠越多，真正要做的事反而被埋起来。我们选择另一条路：先想清楚一件事，再用最少的部件把它做好。
          </p>
          <p class="philosophy-note" v-reveal="160">
            极简不是简陋。它是克制——把注意力还给内容，把选择权还给使用者，把复杂留在我们这一侧。
          </p>
        </div>

        <div class="principles">
          <article class="principle" v-reveal="40">
            <span class="principle-num">01</span>
            <div>
              <h3>一件事，做到底</h3>
              <p>每款产品只回答一个明确的问题。不靠功能堆叠证明价值，也不为了留住你而制造依赖。</p>
            </div>
          </article>
          <article class="principle" v-reveal="100">
            <span class="principle-num">02</span>
            <div>
              <h3>数据属于你</h3>
              <p>源码开放、可自托管，默认 SQLite，随时迁移。你的文档、文章和简历，不该成为平台的人质。</p>
            </div>
          </article>
          <article class="principle" v-reveal="160">
            <span class="principle-num">03</span>
            <div>
              <h3>安静地工作</h3>
              <p>没有开屏广告、诱导弹窗和自动续费。好的工具应该退到事情背后，而不是站在你面前。</p>
            </div>
          </article>
        </div>
      </div>

      <div class="quote-band" v-reveal>
        <span class="quote-mark" aria-hidden="true">“</span>
        <blockquote>好的工具，应该让人<em>感觉不到</em>它的存在。</blockquote>
        <cite>MINIMS DESIGN NOTE / 001</cite>
      </div>
    </div>
  </section>
</template>
