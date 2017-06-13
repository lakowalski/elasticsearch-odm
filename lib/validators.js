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
			return new Error("Field is to short : " + docField + " min : " + fieldType.options.minlength);
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

			if(typeof docField !== 'string')
			{
				return new Error("Field should be a string to use enum : " + docField);
			}

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

validators.checkregex = function(fieldType, docField)
{
	
	if(fieldType.options.match !== undefined){

		if(docField !== undefined){

			if(typeof docField !== 'string')
			{	
				return new Error("Field shoud be a string to use match : " + docField);
			}

			if(fieldType.options.match.test(docField))
			{
				return true;
			}
			else
			{
				return new Error("This field does not respect the regex : " + docField);
			}	
		}
	}
};


validators.minnum = function(fieldType, docField)
{

	if(fieldType.options.min !== undefined){
		
		if(docField !== undefined){

			if(typeof docField !== 'integer'
			   && typeof docField !== 'float' 
		 	   && typeof docField !== 'double' 
			   && typeof docField !== 'long' 
			   && typeof docField !== 'short'
			   && typeof docField !== 'number')
			{
				return new Error("Field should be a number to use min : " + docField);	
			}
			else
			{
				if(docField < fieldType.options.min)
				{
					return new Error("The number is inferior to the min : " + docField);
				}
			}

			return true;
		}
	}
};

validators.maxnum = function(fieldType, docField)
{
	if(fieldType.options.max !== undefined){

		if(docField !== undefined){

			if(typeof docField !== 'integer'
			   && typeof docField !== 'float'
			   && typeof docField !== 'double'
			   && typeof docField !== 'long'
			   && typeof docField !== 'short'
			   && typeof docField !== 'number')
			{
				return new Error("Field should be a number to use max : " + docField);
			}
			else
			{
				if(docField > fieldType.options.max)
				{
					return new Error("The number is superior to the max : " + docField);
				}
			}

			return true;
		}
	}
};
