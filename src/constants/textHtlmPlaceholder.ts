export const textHtmlPlaceHolder = `
<h1>HTML Quick Reference</h1>

<p>Welcome to the HTML Editor!</p>

<h2>Headers</h2>
<h1>This is an h1</h1>
<h2>This is an h2</h2>
<h3>This is an h3</h3>
<h4>This is an h4</h4>
<h5>This is an h5</h5>
<h6>This is an h6</h6>

<h2>Emphasis</h2>
<p><em>This text will be italic</em><br>
<em>This will also be italic</em></p>

<p><strong>This text will be bold</strong><br>
<strong>This will also be bold</strong></p>

<p><em>You <strong>can</strong> combine them</em></p>

<h2>Lists</h2>

<h3>Unordered</h3>
<ul>
    <li>Item 1</li>
    <li>Item 2
        <ul>
            <li>Item 2a</li>
            <li>Item 2b</li>
        </ul>
    </li>
</ul>

<h3>Ordered</h3>
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3
        <ul>
            <li>Item 3a</li>
            <li>Item 3b</li>
        </ul>
    </li>
</ol>

<h2>Links</h2>
<p><a href="http://example.com">Click here</a> to visit a link.</p>

<h2>Images</h2>
<p><img src="http://url/a.png" alt="Image"></p>

<h2>Blockquotes</h2>
<blockquote>
    <p>This is a blockquote.</p>
</blockquote>

<h2>Inline Code</h2>
<p>I think you should use an <code>&lt;addr&gt;</code> tag here.</p>

<h2>Code Blocks</h2>
<pre><code class="javascript">
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
</code></pre>

<p>Enjoy your writing experience!</p>

`
