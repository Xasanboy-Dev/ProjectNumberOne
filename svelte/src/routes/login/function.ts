import validator from 'password-validator';
const valid = new validator();

export function ValidateEmail(input: string) {
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (!input) {
		return false;
	}
	if (input.match(validRegex)) {
		return true;
	} else {
		return false;
	}
}

export function ValidatorPassword(pass: string) {
	valid.is().min(6).has().digits(1);

	return valid.validate(pass);
}

export function ValidName(name: string, lastname: string) {
	if (name.length >= 3 && lastname.length >= 3) {
		return true;
	} else {
		return "Your name or lastname isn't valid!";
	}
}
