'use-strict';

let validators = {}
module.exports = validators;

validators.maxlength = function(fieldType, docField)
{	
    if(fieldType.options.maxlength !== undefined){

	if(docField !==	undefined){

		if(typeof docField !== 'string')
		{
			return new Error("Field should be a string to use maxlength : " + docField);
		}
	

		if(docField.length > fieldType.options.maxlength){
			
			return new Error("Field is to large : " + docField + " max : " + fieldType.options.maxlength);
	
		}
		return true;
	}
    }

   return true;
};

validators.minlength = function(fieldType, docField)
{
    if(fieldType.options.minlength !== undefined){

	if(docField !== undefined){

		if(typeof docField !== 'string')
		{
			return new Error("Field should be a string to use minlength : " + docField);
		}
		if(docField.length < fieldType.options.minlength){
			return new Error("Field is to short : " + docField + "min : " + fieldType.option.minlength
		}
		return true;
	}
	else {
		return new Error("Field is undefined, min is : " + fieldType.options.minlength);
	}

    }
  return true;
};

validators.checkenum = function(fieldType, docField)
{

	if(fieldType.options.enum !== undefined){

		if(docField !== undefined){

			for(i = 0; i < fieldType.options.enum.length; i++)
			{

				if(docField == fieldType.options.enum[i])
				{
					return true;
				}
			}	
		
			return new Error("This field does not respect enum : " + docField);
		}
	}
};
