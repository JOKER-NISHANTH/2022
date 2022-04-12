<%@ Page Language="C#" Inherits="DataBaseCommands.retriveAll" %>
<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="MySql.Data.MySqlClient" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
	<title>Select All</title>
	<script runat="server">
	protected void Page_Load(object sender,EventArgs args)
	{
             MySqlConnection con = new MySqlConnection ("server=localhost;database=cs;userid=root;password=gasc");
			con.Open ();
			MySqlDataAdapter ad=new MySqlDataAdapter("SELECT * from firstmca",con);
			DataSet ds=new DataSet("firstmca");
            ad.Fill(ds,"firstmca");			
            gv.DataSource=ds;
			form1.DataBind ();
			con.Close ();
      }
      public void b1c(object sender,EventArgs args)
      {
    
      }
      
	</script>
	
</head>
<body>
	<form id="form1" runat="server">
		<asp:GridView id="gv" runat="server"  > 
		</asp:GridView>
	<asp:HyperLink id="h" runat="server" Text="Home" NavigateUrl="Default.aspx" />
	</form>
</body>
</html>
