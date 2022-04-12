<%@ Page Language="C#" Inherits="DataListExmple.Default" %>


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
       dbind();
      }
     }
     public void dbind()
     {
            MySqlConnection con = new MySqlConnection ("server=localhost;database=cs;userid=root;password=gasc");
			con.Open ();
			MySqlDataAdapter ad=new MySqlDataAdapter("SELECT * from firstmca",con);
			DataSet ds=new DataSet("firstmca");
            ad.Fill(ds,"firstmca");			
            d1.DataSource=ds;
			form1.DataBind ();
			con.Close ();
     }
     
     protected void editrecord(object sender,DataListCommandEventArgs e) {
     
     	d1.EditItemIndex = e.Item.ItemIndex;
     	dbind();
     
     }
      protected void cancelrecord(object sender,DataListCommandEventArgs e) {
     
     	d1.EditItemIndex =-1;
     	dbind();
     
     }
    
     
       protected void updaterecord(object sender,DataListCommandEventArgs e) {
    	
     	String rno,name , mark;
     	TextBox rno = (TextBox) (e.ItemFindControl)("t1").Text;
     	TextBox name = (TextBox) (e.ItemFindControl)("t2").Text;
     	TextBox mark = (TextBox) (e.ItemFindControl)("t3").Text;
     	
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
      
      
     	d1.EditIItemIndex = -1;
     	dbind();
     
     }
     
     protected void deleterecord(object sender,DataListCommandEventArgs e){
     String rno;
     	TextBox rno = (TextBox) (e.ItemFindControl)("t1").Text;
     	MySqlConnection con = new MySqlConnection ("server=localhost;database=cs;userid=root;password=gasc");
			con.Open ();
			MySqlCommand cmd =new MySqlCommand("DELETE from firstmca WHERE  rno='"+rno.Text+"', marks ='"+newmark.Text+"' WHERE rno='"+rno+"'",con);
			int i = cmd.ExecuteNonQuery();
			if (i == 1) {
			l1.Text = "Record Delete";
			}
			else {
			l1.Text = "Error";
			}
		
			con.Close ();
      
      
     	d1.EditIItemIndex = -1;
     	dbind();
     }
     
     
    
 </script>
	
</head>
<body>
	<form id="form1" runat="server">
	<asp:DataList id="d1" runat="server" DarteKeyNames="rno" 
			GridLines="Both" RepeatColumns="3" RepeatDirection="Horizontal" 
			OnEditCommand=""
			OnUpdateCommand=""
			OnDeleteCommand=""
			OnCancelCommand="" >
			
		<EditItemStyle ForeColor="rose"	BackColor="blue" />
		<ItemTemplate>
			Rno : <% #Eval("rno") %> <br/>
			Rno : <% #Eval("name") %> <br/>
			Rno : <% #Eval("mark") %> <br/>
			
			<asp:Button id="b1" Text="Edit" CommandName="Edit" />
			<asp:Button id="b2" Text="Delete" CommandName="Delete" />
		</ItemTemplate>
			
			
			<EditItemTemplate>
				Rno : <asp:TextBox id="t1" runat="server" />
				Name : <asp:TextBox id="t2" runat="server" />
				Mark : <asp:TextBox id="t3" runat="server" />
				
			<asp:Button id="b3" Text="Update" CommandName="Update" />
			<asp:Button id="b4" Text="Cancel" CommandName="Cancel" />
				
			</EditItemTemplate>
			
			</asp:DataList>
			
	
		
	</form>
</body>
</html>
