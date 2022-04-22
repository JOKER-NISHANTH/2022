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
    
     
       protected void updaterecord(object sender,DataListCommandEventArgs e) 
       {
    	
     	String rno,name,marks;
     	  rno = ((TextBox) (e.Item.FindControl("t1"))).Text;
     	  name = ((TextBox) (e.Item.FindControl("t2"))).Text;
     	  marks = ((TextBox) (e.Item.FindControl("t3"))).Text;
     	
     	    MySqlConnection con = new MySqlConnection ("server=localhost;database=cs;userid=root;password=gasc");
			con.Open ();
			MySqlCommand cmd =new MySqlCommand("UPDATE  firstmca SET  name='"+name+"', marks ='"+marks+"' WHERE rno='"+rno+"'",con);
			int i = cmd.ExecuteNonQuery();
			if (i == 1) {
			l1.Text = "Record Update";
			}
			else {
			l1.Text = "Error";
			}
		
			con.Close ();
      
      
     	d1.EditItemIndex = -1;
     	dbind();
     
     }
     
     protected void deleterecord(object sender,DataListCommandEventArgs e)
     {
        String rno; 
        
     	rno = ((TextBox) (e.Item.FindControl("t1"))).Text;
     	MySqlConnection con = new MySqlConnection ("server=localhost;database=cs;userid=root;password=gasc");
			con.Open ();
			MySqlCommand cmd =new MySqlCommand("DELETE from firstmca WHERE  rno='"+rno+"'",con);
			int i = cmd.ExecuteNonQuery();
			if (i == 1) {
			l1.Text = "Record Delete";
			}
			else {
			l1.Text = "Error";
			}
		
			con.Close ();
      
      
     	d1.EditItemIndex = -1;
     	dbind();
     }
     
     
    
 </script>
	
</head>
<body>
	<form id="form1" runat="server">
	<asp:DataList id="d1" runat="server" DataKeys="rno" 
			GridLines="Both" RepeatColumns="2" RepeatDirection="Vertical" 
			OnEditCommand="editrecord"
			OnUpdateCommand="updaterecord"
			OnDeleteCommand="deleterecord"
			OnCancelCommand="cancelrecord" >
			
		<ItemStyle ForeColor="green"	BackColor="yellow" />	
		<EditItemStyle ForeColor="blue"	BackColor="white" />
		
		<ItemTemplate>
		    <center>
				Rno : <%#Eval("rno")%> <br/>
				Name : <%#Eval("name")%> <br/>
				Mark : <%#Eval("marks")%> <br/>
			
				<asp:Button id="b1" Text="Edit Record" CommandName="Edit" runat="server" />
				<asp:Button id="b2" Text="Delete" CommandName="Delete" runat="server"/>
	      </center>		
		</ItemTemplate>
		
		<EditItemTemplate >
		   <center>	
		       
		        Rno : <asp:TextBox id="t1" runat="server" />
				Name : <asp:TextBox id="t2" runat="server" />
				Mark : <asp:TextBox id="t3" runat="server" />
			
				<asp:Button id="b3" Text="Update" CommandName="Update" runat="server"/>
				<asp:Button id="b4" Text="Cancel" CommandName="Cancel" runat="server"/>
		 
		   </center>	
		 		
		</EditItemTemplate>
			
			</asp:DataList>
			
	<asp:Label id="l1" runat="server"/>
		
	</form>
</body>
</html>
