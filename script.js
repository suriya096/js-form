function form_submit()
{
    let x = String(document.getElementById("name").value);
    let y = String(document.getElementById("password").value);
    let regName = /\d+$/g;
    if (x == ""|| regName.test(x)) 
    {
        alert("email must filled properly");
        x.focus();
        return false;
      }
 
if( x.length <6)
{
    alert("email must be contained 6 character");
    x.focus();
    return false;
}
if (y == "") 
{
    alert("Password must be filled out");
    y.focus();
    return false;
  }
  if(y.length <6)
  {
    alert("password must contain atleast 6 character")
      y.focus();
      return false;
  }
  else
  {
    alert("register sucessfully")
  }
    

}

