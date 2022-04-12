<%@ Page Language="C#" Inherits="DataBaseCommands.Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
	<title>Default</title>
</head>
<body>
	<form id="form1" runat="server">
		<asp:HyperLink id="retrive" runat="server" Text="Retrive All Data" NavigateUrl="retriveAll.aspx" /> <br />
		<asp:HyperLink id="insert" runat="server" Text="Insert Data" NavigateUrl="insert.aspx" /> <br />
		<asp:HyperLink id="update" runat="server" Text="Update Data" NavigateUrl="update.aspx" /> <br />
		<asp:HyperLink id="delete" runat="server" Text="Delete Data" NavigateUrl="delete.aspx" /> <br />
		<asp:HyperLink id="rsc" runat="server" Text="Retrive Single Field Value" NavigateUrl="singleValue.aspx" /> <br />
	</form>
</body>
</html>

