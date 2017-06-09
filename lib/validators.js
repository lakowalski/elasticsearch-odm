'use-strict';

let validators = {}
module.exports = validators;

validators.maxlength = function(fieldType, docField)
{	
	//console.log("fieldtype-------------------------------------------");
	//console.log(fieldType);
	//console.log("docField--------------------------------------------");
	//console.log(docField);
	//console.log(field.maxlength);


	if(docField !== undefined && docField.length > fieldType.options.maxlength){
			
		return new Error("Field is to large : " + docField + " max : " + fieldType.options.maxlength);

	}
	return true;
};


