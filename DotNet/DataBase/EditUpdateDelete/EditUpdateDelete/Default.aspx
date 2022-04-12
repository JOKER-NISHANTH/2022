<%@ Page Language="C#" Inherits="EditUpdateDelete.Default" %>

<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="MySql.Data.MySqlClient" %>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
	<title>Edit</title>
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
     
     protected void editrecord(object sender,GridViewEditEventArgs e) {
     
     	gv1.EditIndex = e.NewEditIndex;
     	gbind();
     
     }
      protected void cancelrecord(object sender,GridViewCancelEditEventArgs e) {
     
     	gv1.EditIndex =-1;
     	gbind();
     
     }
    
     
       protected void updaterecord(object sender,GridViewUpdateEventArgs e) {
    
     	GridViewRow r = (GridViewRow) gv1.Rows[e.RowIndex];
     	String rno = gv1.DataKeys[e.RowIndex].Value.ToString();
     	TextBox newname = (TextBox) r.Cells[1].Controls[0];
     	TextBox newmark = (TextBox) r.Cells[2].Controls[0];
     	
     	    MySqlConnection con = new MySqlConnection ("server=localhost;database=cs;userid=root;password=gasc");
			con.Open ();
			MySqlCommand cmd =new MySqlCommand("UPDATE  firstmca SET  name='"+newname.Text+"', marks ='"+newmark.Text+"' WHERE rno='"+rno+"'",con);
			int i = cmd.ExecuteNonQuery();
			if (i == 1) {
			l1.Text = "Record Update";
			}
			else {
			l1.Text = "Error";
			}
		
			con.Close ();
      
      
     	gv1.EditIndex = -1;
     	gbind();
     
     }
     
     
    
 </script>
</head>
<body>
	<form id="form1" runat="server">
	
		<asp:GridView id="gv1" runat="server" AutoGenerateColumns="False"
		  DataKeyNames="rno"
		 OnRowCancelingEdit="cancelrecord"  
		 OnRowUpdating="updaterecord" 
		 OnRowEditing="editrecord" CellPadding="10" CellSpacing="10">
		     <RowStyle Backcolor="Yellow" Forecolor="Green"/>
		     <AlternatingRowStyle Backcolor="Red" Forecolor="Blue"/>
		     <Columns>
		         <asp:BoundField DataField="rno"  HeaderText="Roll No"/>
		          <asp:BoundField DataField="name"  HeaderText="NAME"/>
		          <asp:BoundField DataField="marks"  HeaderText="MARKS"/>
		         <asp:CommandField ShowEditButton="True"/>
		      </Columns>   
		   </asp:GridView><br/>
		   <asp:Label id="l1" runat="server"/>
		   
		   
	</form>
</body>
</html>





