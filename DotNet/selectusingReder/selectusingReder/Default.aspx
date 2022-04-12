<%@ Page Language="C#" Inherits="selectusingReder.Default" %>

<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="MySql.Data.MySqlClient" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
	<title>Default</title>
	
	<script runat="server">
	protected void Page_Load(object sender,EventArgs args)
	{
             MySqlConnection con = new MySqlConnection ("server=localhost;database=cs;userid=root;password=gasc");
			con.Open ();
			
			MySqlCommand cmd  = new MySqlCommand("SELECT rno FROM firstmca WHERE marks > '95'");
			cmd.Connection = con;
			MySqlDataReader dr;
			dr = cmd.ExecuteReader();
			dr.Read();
			t1.Text = dr[0].ToString();
			form1.DataBind();
			con.Close ();
      }
      
	</script>
	
</head>
<body>
	<form id="form1" runat="server">
		<asp:TextBox id="t1" runat="server" />
		
	</form>
</body>
</html>
