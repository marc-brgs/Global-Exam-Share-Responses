class GlobalExamParser {
	static async getAllExo(id="pm-33098") {
		let header = document.querySelector("#"+id + " > p").textContent;
		let btnCount = document.querySelector("#"+id).parentElement.querySelectorAll("div.grid button").length; 
		let result = new String();
		
		for(let i = 0; i < btnCount; i++) {
			let div = document.querySelector("#"+id).parentElement;
			let buttons = div.querySelectorAll("div.grid button");
			let exoTitle = buttons[i].querySelector("button > p").textContent;

			result += exoTitle + "\n";
			buttons[i].click();
			await this.wait(1500);
			let exoResult = await this.getExo(false);
			result += exoResult + "\n";
			history.back();
			await this.wait(1500);
		}
		console.log(header + "\n\n" + result);
	}
	
	static async getExo(echo=true) {
		let buttons = document.querySelectorAll("#exam-questions-slider button");
		if(buttons.length == 0) return "No answer found (exercise not completed or timed out)\n";
		
		let result = new String();
		for(let i = 0; i < buttons.length; i++) {
			buttons[i].click();
			await this.wait(50);
			let correct = document.querySelector("div.flex.flex-col .bg-success-05");
			let letter = correct.querySelector(".mr-1").textContent;
			
			result += parseInt(i+1) + " " + letter.substring(0, letter.length-1) + "\n";
		}
		
		if(echo) console.log(result);
		return result;
	}
	
	static wait(delay=50) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(true);
			}, delay);
		});
	}
}