<%@ Page Language="C#" Inherits="calenderProgram.Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
	<title>Default</title>
</head>
<body>
	
			
	<form id="form1" runat="server">
	
	<asp:Calendar id="c1" runat="server" OnSelectionChanged="clicked" />	
	
<p>Today date is: <asp:Label ID="today" runat="server" /></p>
<p>Your Birthday is: <asp:Label ID="dob" runat="server" /></p>
<p><asp:Label ID="showDate" runat="server" /></p>
<p> Date Month Year Format : <asp:Label ID="d" runat="server" /></p>
	</form>

</body>
</html>
