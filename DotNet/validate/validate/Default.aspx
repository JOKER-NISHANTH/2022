<%@ Page Language="C#" Inherits="validate.Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
	<title>Default</title>
</head>
<body>
	<form id="form1" runat="server">
	
		Name
	
		<asp:TextBox id="t1" runat="server" /> 
		<asp:RequiredFieldValidator id="r1" runat="server" ControlToValidate="t1" ErrorMessage="Enter a Name " /> <br/>
	
		
		Password
	
		<asp:TextBox id="t3" runat="server" /> 		
		
		Reenter password
		
		<asp:TextBox id="t4" runat="server" /> 
		
		
		
		<asp:CompareValidator id="r3" runat="server" ControlToValidate="t3" ControlToCompare="t4"  ErrorMessage=" Password does not match " /> <br/>
		
		Enter your email 
		
		<asp:TextBox id="t5" runat="server" /> 		
		<asp:RegularExpressionValidator id="r4" runat="server" ControlToValidate="t5" ValidationExpression="\w+@\w+.com" ErrorMessage="Wrong Email id" /> <br/>
		
		<asp:ValidationSummary id="r5" runat="server" ShowSummary="True" DisplayMode="BulletList" />
		
		<asp:Button id="button1" runat="server" Text="Validate" OnClick="b1c" />
	</form>
</body>
</html>
