<div class="window">
	<div class="menu">
		<div class="buttons close" />
		<div class="buttons minimize" />
		<div class="buttons zoom" />
	</div>
	<div class="screen">
		<slot />
	</div>
</div>

<style lang="scss">
	.window {
		margin: 0 auto;
		width: 80%;
		box-shadow: -8px -8px 25px #333333;
	}

	.buttons {
		height: 10px;
		width: 10px;
		border-radius: 50%;
		border: 1px solid #000;
		position: relative;
		left: 6px;
		background-color: #ff3b47;
		border-color: #9d252b;
		display: inline-block;
	}

	.minimize {
		left: 11px;
		background-color: #ffc100;
		border-color: #9d802c;
	}

	.zoom {
		left: 16px;
		background-color: #00d742;
		border-color: #049931;
	}

	.menu {
		box-sizing: border-box;
		height: 20px;
		background-color: #bbb;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
	}

	.screen {
		background-color: #151515;
		box-sizing: border-box;
		padding: 20px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		font-family: monospace;
		font-size: 13px;
		line-height: 1.5em;
	}
</style>
