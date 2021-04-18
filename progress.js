import NProgress from 'nprogress';
import Vue from 'vue';

const pageTemp = {
	template: `
	<div id="progressbar" class="progressing">
		<div class="bar" role="bar">
			<div class="peg"></div>
		</div>
		<div class="particlesdiv">
			<div class="sk-cube-grid">
				<div class="sk-cube sk-cube1"></div>
				<div class="sk-cube sk-cube2"></div>
				<div class="sk-cube sk-cube3"></div>
				<div class="sk-cube sk-cube4"></div>
				<div class="sk-cube sk-cube5"></div>
				<div class="sk-cube sk-cube6"></div>
				<div class="sk-cube sk-cube7"></div>
				<div class="sk-cube sk-cube8"></div>
				<div class="sk-cube sk-cube9"></div>
			</div>
		</div>
	</div>
	`
}

const loadTemp = {
	template: `
	<div id="progressbar">
		<div class="bar" role="bar">
			<div class="peg"></div>
		</div>
	</div>
	`
}

Vue.use({
	install: function (Vue, options) {
		Vue.prototype.$load = {
			start(state) {
				if (!state || state === "load") {
					NProgress.configure(loadTemp)
				} else if (state === "page") {
					NProgress.configure(pageTemp)
				}
				NProgress.start()
			},
			done() {
				NProgress.done()
			}
		}
	}
})
