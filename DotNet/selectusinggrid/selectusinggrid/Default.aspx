<%@ Page Language="C#" Inherits="selectusinggrid.Default" %>

<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="MySql.Data.MySqlClient" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
	<title>Default</title>
	<script runat="server">
    protected void Page_Load(object sender,EventArgs args)
    {
      if(!Page.IsPostBack)
      {
       gbind();
      }
     }
     public void gbind()
     {
            MySqlConnection con = new MySqlConnection ("server=localhost;database=cs;userid=root;password=gasc");
			con.Open ();
			MySqlDataAdapter ad=new MySqlDataAdapter("SELECT * from firstmca",con);
			DataSet ds=new DataSet("firstmca");
            ad.Fill(ds,"firstmca");			
            gv1.DataSource=ds;
			form1.DataBind ();
			con.Close ();
     }
     protected void selectrecord(object sender,EventArgs args)
     {
      GridViewRow r =gv1.SelectedRow;
      t1.Text=r.Cells[0].Text;
      t2.Text=r.Cells[1].Text;
     }
 </script>
</head>


 
<body>
	<form id="form1" runat="server">
	
		<asp:GridView id="gv1" runat="server" AutoGenerateColumns="False"  DataKeyNames="rno"  OnSelectedIndexChanged="selectrecord"
		     CellPadding="10" CellSpacing="10">
		     <RowStyle Backcolor="Yellow" Forecolor="Green"/>
		     <AlternatingRowStyle Backcolor="Red" Forecolor="Blue"/>
		     <Columns>
		         <asp:BoundField DataField="rno"  HeaderText="Roll No"/>
		          <asp:BoundField DataField="name"  HeaderText="NAME"/>
		         <asp:CommandField ShowSelectButton="True" SelectText="selectthisrecord"/>
		     </Columns>   
		   </asp:GridView><br/>
		   <asp:TextBox id="t1" runat="server"/>
		   <asp:TextBox id="t2" runat="server"/>
		   
	</form>
</body>
</html>
