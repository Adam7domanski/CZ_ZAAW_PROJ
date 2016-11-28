function Validate(field_value,field_nr)
{
var field_value = document.getElementById(field_value).value;

        switch(field_nr){
            case 1 :
                if(field_value ==""|| field_value == null)
                {
                alert("You can not leave this field empty");
                }
            break;

            case 2 :
                if(field_value ==""|| field_value == null)
                {
                alert("You can not leave this field empty");
                }
            break;
            case 3 :
                if(field_value ==""|| field_value == null)
                {
                alert("You can not leave this field empty");
                }
            break;
            case 4 :
                if(field_value ==""|| field_value == null)
                {
                alert("You can not leave this field empty");
                }
            break;
        }
}