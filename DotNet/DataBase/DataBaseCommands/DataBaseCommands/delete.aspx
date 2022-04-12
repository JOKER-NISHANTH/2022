<%@ Page Language="C#" Inherits="DataBaseCommands.delete" %>
<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="MySql.Data.MySqlClient" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
	<title>Delete</title>
	<script runat="server">
	
      public void b1c(object sender,EventArgs args)
      {
      MySqlConnection con = new MySqlConnection ("server=localhost;database=cs;userid=root;password=gasc");
			con.Open ();
			MySqlCommand cmd =new MySqlCommand("DELETE FROM  firstmca  WHERE rno='"+roll.Text+"'",con);
			int i = cmd.ExecuteNonQuery();
			if (i == 1) {
			l.Text = "Record Delete";
			}
			else {
			l.Text = "Error";
			}
		
			con.Close ();
      }
      
	</script>
	
</head>
<body>
	<form id="form1" runat="server">
	Roll No
	<asp:TextBox id="roll" runat="server" /> <br />
	<asp:Label id="l" runat="server" />
	<asp:Button id="b" runat="server" OnClick="b1c " Text="Delete Data" />
	
	<asp:HyperLink id="h" runat="server" Text="Home" NavigateUrl="Default.aspx" />
	</form>
</body>
</html>
