# Day 1 Cheatsheet

## Table of Contents
- [Shortcuts Learned](#shortcuts-learned)
- [Style Tag](#style-tag)
- [Topics](#topics)
- [Installing Extensions](#installing-extensions)
- [VS Code Configuration For Convenience](#vs-code-configuration-for-convenience)
- [Table](#table)
- [Datalist](#datalist)
- [Checkbox](#checkbox)
- [Radio Button](#radio-button)
- [Select and Multi Select](#select-and-multi-select)
- [Onclick Attribute](#onclick-attribute)
- [Script Tag](#script-tag)
- [Form](#form)
- [Font Awesome](#font-awesome)
- [Form Style](#form-style)
- [Soundcloud Embed](#soundcloud-embed)
- [Youtube Embed](#youtube-embed)
- [Google PDF](#google-pdf)
- [Google Sheets](#google-sheets)
- [Anchor Links or Quick Links](#anchor-links-or-quick-links)
- [Navigation Menu](#navigation-menu)

## Shortcuts Learned
- <kbd>CTRL</kbd> + <kbd>/</kbd> = Comment Line or Selection

- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>A</kbd> = Insert a Comment
- <kbd>⊞ Win</kbd> + <kbd>;</kbd> = Emoji Keyboard
- <kbd>CTRL</kbd> + <kbd>B</kbd> = Toggle Sidebar
- <kbd>ALT</kbd> + <kbd>Z</kbd> = Toggle Wordwrap
- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd> = Duplicate Line ↑/↓
- <kbd>CTRL</kbd> + <kbd>ENTER</kbd> = Insert After Line
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>ENTER</kbd> = Insert Before Line
- <kbd>CTRL</kbd> + <kbd>+</kbd> / <kbd>-</kbd> = Zoom In / Out
- <kbd>CTRL</kbd> + <kbd>0</kbd> = Reset Zoom Level
- <kbd>ALT</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd> = Move Line ↑/↓
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> = Command Pallete then type ```wrap``` to find ```"Emmet: Wrap with Abbreviation"```
- <kbd>CTRL</kbd> + <kbd>F</kbd> = Find
- <kbd>F3</kbd> / <kbd>Shift</kbd> + <kbd>F3</kbd> = Cycle Results
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>L</kbd> = Select All Occurence
- <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>🖱 Click & Drag</kbd> = List Select Multi-Cursor
- <kbd>CTRL</kbd> + <kbd>D</kbd> = Add Next Occurence


## Style Tag

```html
	<style>
		body {
			margin-bottom: 500px;
			font-family: sans-serif;
		}

		.topic {
			font-style: italic;
			color: olivedrab;
		}

		#page-title {
			font-style: normal;
			font-size: 40px;
		}
	</style>
```

## Topics

```html
	<h3 class="topic" id="h16">Headings 1 - 6</h3>
	<h3 class="topic" id="hr">Horizontal Rule</h3>
	<h3 class="topic" id="pllb">Paragraph | Lorem | Line Break</h3>
	<h3 class="topic" id="ol">Ordered List</h3>
	<h3 class="topic" id="ulsc">Unordered List | Special Characters</h3>
	<h3 class="topic" id="ht">HTML Table</h3>
	<h3 class="topic" id="div">Div</h3>
	<h3 class="topic" id="span">Span</h3>
	<h3 class="topic" id="sei">Strong | Emphasis | Insert</h3>
	<h3 class="topic" id="hf">HTML Forms</h3>
	<h3 class="topic" id="img">Images</h3>
	<h3 class="topic" id="tl">Text Links</h3>
	<h3 class="topic" id="il">Image Links</h3>
	<h3 class="topic" id="em">Embedding Media</h3>
	<h3 class="topic" id="oe">Other Embeds</h3>
	<h3 class="topic" id="alql">Anchor Links | Quick Links</h3>
```

## Installing Extensions
    Extensions > Install "Live Server" by Ritwick Dey
    Extensions > Install "Text Pastry" by jkjustjoshingh
    Extensions > Install "Cobalt2" by Wes Bos

## VS Code Configuration For Convenience
Open the command pallete via: <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> <br>
Then Search for ```"Preferences: Open User Settings (JSON)"``` <br>
Copy and Past the code below there.
```json
{
  "files.autoSave": "onFocusChange",
  "editor.tabSize": 2,
  "editor.linkedEditing": true,
  "editor.multiCursorModifier": "ctrlCmd",
  "liveServer.settings.host": "localhost",
  "liveServer.settings.port": 80,
}
```

## Table

```html
	<!-- table -->
	<h3 class="topic" id="ht">HTML Table</h3>

	<table border="1">

		<tfoot>
			<tr>
				<td>footer</td>
				<td>footer</td>
			</tr>
		</tfoot>

		<thead>
			<tr>
				<th>Item</th>
				<th>Price</th>
			</tr>
		</thead>

		<tbody>
			<tr>
				<td>Desktop</td>
				<td>P75,000</td>
			</tr>

			<tr>
				<td>Laptop</td>
				<td>P60,000</td>
			</tr>
		</tbody>

	</table>

	<table border="1" width="450">

		<thead>
			<tr>
				<th rowspan="2">Training Title</th>
				<th colspan="2">Training Date</th>
			</tr>
			<tr>
				<td>From</td>
				<td>To</td>
			</tr>
		</thead>

		<tbody>
			<tr>
				<td>HTML | CSS | Bootstrap Training</td>
				<td>March 4</td>
				<td>March 6</td>
			</tr>
		</tbody>

		<tfoot>
			<tr>
				<td colspan="3" style="font-size: 12px; font-style: italic;text-align: center;">Inventive Media ©</td>
			</tr>
		</tfoot>

	</table>
```

## Datalist

```html
		<!-- datalist  -->
		<datalist id="choices">
			<option value="🍫 Chocolate"></option>
			<option value="🥥 Coconut"></option>
			<option value="🍃 Mint"></option>
			<option value="🍓 Strawberry"></option>
			<option value="🍦 Vanilla"></option>
		</datalist>
```

## Checkbox

```html
		<fieldset>
			<!-- Checkbox input:checkbox -->
			<legend>What are your Interests?</legend>
			<label for="food">Food</label>
			<input type="checkbox" name="interests" id="food" checked>
			<label for="fashion">Fashion</label>
			<input type="checkbox" name="interests" id="fashion">
			<label for="travel">Travel</label>
			<input type="checkbox" name="interests" id="travel">
		</fieldset>
```

## Radio Button

```html
		<fieldset>
			<!-- Radio Button input:radio -->
			<legend>Gender</legend>
			<label for="male">Male</label>
			<input type="radio" name="gender" id="male">
			<label for="femail">Female</label>
			<input type="radio" name="gender" id="female">
			<label for="rns">Rather Not Say</label>
			<input type="radio" name="gender" id="rns">
		</fieldset>
```

## Select and Multi Select

```html
		<!-- select -->
		<label for="select">Select</label>
		<select name="browsers" id="select">
			<option value="chrome">Chrome</option>
			<option value="safari">Safari</option>
			<option value="firefox">Firefox</option>
			<option value="brave" selected>Brave</option>
		</select>

		<label for="multi-select">Multi-Select</label>
		<select name="courses" id="multi-select" multiple="true">
			<option value="html">HTML</option>
			<option value="css">CSS</option>
			<option value="bootstrap">Bootstrap</option>
			<option value="javascript">Javascript</option>
		</select>
```

## Onclick Attribute

```html
			onclick="
			document.querySelector('form').appendChild(
			document.createTextNode(
			prompt('What is your name?')
			))"
```

## Script Tag

```html
	<script>
		const button = document.querySelector(`button[type="button"]`);
		button.onclick = function writeName(ask) {
			
			ask = prompt(`What's your Name`);
			const txt = document.createTextNode(ask);
			
			const form = document.querySelector(`form`);
			const div = form.appendChild(document.createElement(`div`));
			div.style.fontFamily = "sans-serif";
			div.style.fontSize = "50px";
			div.style.textAlign = "center";
			const content = div.appendChild(txt);
		}
	</script>
```

## Form

```html
	<form action="">

		<div>
			<!-- Text input -->
			<label for="name">Full Name</label>
			<input type="text" placeholder="Panado, Jan G." id="name" name="name" autocomplete="name"><!-- required autocomplete-->
			<span></span>
		</div>

		<div>
			<!-- Search input:search -->
			<label for="search">Search</label>
			<input type="search" name="search" id="search" list="choices">
		</div>

		<!-- datalist  -->
		<datalist id="choices">
			<option value="🍫 Chocolate"></option>
			<option value="🥥 Coconut"></option>
			<option value="🍃 Mint"></option>
			<option value="🍓 Strawberry"></option>
			<option value="🍦 Vanilla"></option>
		</datalist>

		<div>
			<!-- Password input:password -->
			<label for="password">Password</label>
			<input type="password" name="password" id="password" minlength="8" required>
		</div>

		<div>
			<!-- Telephone input:tel -->
			<label for="tel">Mobile</label>
			<input type="tel" name="tel" id="tel" required>
		</div>

		<div>
			<!-- Email input:email -->
			<label for="mail">Email</label>
			<input type="email" name="mail" id="mail">
			<span></span>
		</div>

		<fieldset>
			<!-- Checkbox input:checkbox -->
			<legend>What are your Interests?</legend>
			<label for="food">Food</label>
			<input type="checkbox" name="interests" id="food" checked>
			<label for="fashion">Fashion</label>
			<input type="checkbox" name="interests" id="fashion">
			<label for="travel">Travel</label>
			<input type="checkbox" name="interests" id="travel">
		</fieldset>

		<fieldset>
			<!-- Radio Button input:radio -->
			<legend>Gender</legend>
			<label for="male">Male</label>
			<input type="radio" name="gender" id="male">
			<label for="femail">Female</label>
			<input type="radio" name="gender" id="femail">
			<label for="rns">Rather Not Say</label>
			<input type="radio" name="gender" id="rns">
		</fieldset>

		<div>
			<!-- File input:file -->
			<label for="file">File Upload</label>
			<input type="file" name="upload" id="file">
		</div>

		<div>
			<!-- Date input:date -->
			<label for="date">Date</label>
			<input type="date" name="date" id="date">
		</div>

		<div>
			<!-- Datetime Local input:datetime-local -->
			<label for="datetime-local">Datetime Local</label>
			<input type="datetime-local" name="datetime-local" id="datetime-local">
		</div>

		<div>
			<!-- Color input:color -->
			<label for="color">Color</label>
			<input type="color" name="color" id="color">
		</div>

		<div>
			<!-- Range input:range -->
			<label for="range">Range</label>
			<input type="range" name="range" id="range" value="0">
		</div>

		<div>
			<!-- textarea-->
			<label for="textarea">Text Area</label>
			<textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
		</div>

		<div>
			<!-- select -->
			<label for="select">Select</label>
			<select name="browsers" id="select">
				<option value="chrome">Chrome</option>
				<option value="safari">Safari</option>
				<option value="firefox">Firefox</option>
				<option value="brave" selected>Brave</option>
			</select>

			<label for="multi-select">Multi-Select</label>
			<select name="courses" id="multi-select" multiple="true">
				<option value="html">html</option>
				<option value="css">CSS</option>
				<option value="bootstrap">Firefox</option>
				<option value="javascript">Javascript</option>
			</select>
		</div>

		<fieldset>
			<!-- input:reset input:submit button -->
			<legend>Reset / Submit</legend>

			<input type="reset" value="Reset">
			<input type="submit" value="Submit Input">
			<button>Submit Button</button>
		</fieldset>

		<fieldset>
			<legend>Use When Doing Something</legend>

			<button type="button">
				<i class="fas fa-paper-plane"></i>
				Generic Button
			</button>

			<input
			type="button"
			value="Generic Input"
			onclick="
			document.querySelector('form').appendChild(
			document.createTextNode(
			prompt('What is your name?')
			))">

			<a role="button">Generic Anchor</a>
		</fieldset>

		<fieldset>
			<legend>Use This When Going Somewhere</legend>

			<a href="#">Link Anchor</a>
		</fieldset>

	</form>
```

## Font Awesome
```html
	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
```

## Form Style

```css
		form {
			display: grid;
			gap: 1rem;
			width: fit-content;
			padding: 2rem;
			background-color: aquamarine;
			margin-inline: auto;
		}
```

## Soundcloud Embed

```html
	<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/939977434&color=%234eca5d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/bangtan" title="BTS" target="_blank" style="color: #cccccc; text-decoration: none;">BTS</a> · <a href="https://soundcloud.com/bangtan/2020jinbirthday" title="Abyss by Jin of BTS" target="_blank" style="color: #cccccc; text-decoration: none;">Abyss by Jin of BTS</a></div>
```

## Youtube Embed

```html
	<iframe width="450" height="250" src="https://www.youtube.com/embed/1dJAIvCk0MA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

## Google PDF
```html
	<iframe src="https://drive.google.com/file/d/1IL-KCi4YVVvJx8wylwbSlqdmIhQcvbB1/preview" width="450" height="450" allow="autoplay"></iframe>
```

## Google Sheets
```html
	<iframe width="450" height="450" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSlFQzx-hpK4BPSXrqBzno0KeN--f2mgGRy5Nb9ELlfHRjlhv5-xb2VStNnub3N5s9vNC2JRceT8Cwm/pubhtml?widget=true&amp;headers=false"></iframe>
```

## Anchor Links or Quick Links

```html
	<ul>
		<li><a href="#hr">Horizontal Rule</a></li>
		<li><a href="#pllb">Paragraph | Lorem | Line Break</a></li>
		<li><a href="#ol">Ordered List</a></li>
		<li><a href="#ulsc">Unordered List | Special Characters</a></li>
		<li><a href="#ht">HTML Table</a></li>
		<li><a href="#div">Div</a></li>
		<li><a href="#span">Span</a></li>
		<li><a href="#sei">Strong | Emphasis | Insert</a></li>
		<li><a href="#hf">HTML Forms</a></li>
		<li><a href="#img">Images</a></li>
		<li><a href="#tl">Text Links</a></li>
		<li><a href="#il">Image Links</a></li>
		<li><a href="#em">Embedding Media</a></li>
		<li><a href="#oe">Other Embeds</a></li>
		<li><a href="#alql">Anchor Links | Quick Links</a></li>
	</ul>
```

## Navigation Menu

```html
	<nav>
		<a href="./index.html">Home 🏠</a>
		<a href="./block.html">Block 🧱</a>
		<a href="./inline.html">Inline 🔗</a>
		<label for="nav-toggle">Menu 📄</label>

		<hr>

		<input type="checkbox" name="nav-toggle" id="nav-toggle">

		<ul>
			<li><a href="#h16">Headings 1 - 6</a></li>
			<li><a href="#hr">Horizontal Rule</a></li>
			<li><a href="#pllb">Paragraph | Lorem | Line Break</a></li>
			<li><a href="#ol">Ordered List</a></li>
			<li><a href="#ulsc">Unordered List | Special Characters</a></li>
			<li><a href="#ht">HTML Table</a></li>
			<li><a href="#div">Div</a></li>
			<li><a href="#span">Span</a></li>
			<li><a href="#sei">Strong | Emphasis | Insert</a></li>
			<li><a href="#hf">HTML Forms</a></li>
			<li><a href="#img">Images</a></li>
			<li><a href="#tl">Text Links</a></li>
			<li><a href="#il">Image Links</a></li>
			<li><a href="#em">Embedding Media</a></li>
			<li><a href="#oe">Other Embeds</a></li>
			<li><a href="#alql">Anchor Links | Quick Links</a></li>
		</ul>
	</nav>
```