---
	author: Wolfr_
	date: "22 June 2021"
	time: "10:09"
	title: "How the single-command install of Bedrock works"
---

<p>How did we come up with a single-command install for Bedrock and how does it work? The logic relies on two things: degit and npx.</p>

<p>The <a href="https://github.com/Rich-Harris/degit">degit</a> command allows you to clone a repository without the Bedrock Git repository itself (since you won’t be working on Bedrock, but on your own project). Degit was created by Rich Harris of <a href="https://svelte.dev/">Svelte</a> fame.</p>

<p>Npx is a node feature since Node 5.2. It’s a package runner that allows you to run a allows you to run a command without having to install it. </p>

<p>The combination of these is what allows you to install Bedrock with a single command, provided you have a recent version of Node installed.</p>
