<%@ Page Language="C#" Inherits="viewState.Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
	<title>Default</title>
<script runat="server" language="c#">


	public void b1c (object sender, EventArgs args)
		{
			ViewState ["a"] = t1.Text;
			ViewState ["b"] = t2.Text;
		}

		public void b2c (object sender, EventArgs args)
		{
			l1.Text=	ViewState ["a"].ToString();
			l2.Text = ViewState ["b"].ToString()  ;
			Response.Redirect ("second.aspx");
		}







</script>












</head>

<body>
	<form id="form1" runat="server">
		
		<asp:TextBox id="t1" runat="server" />
		<asp:TextBox id="t2" runat="server" />
	
		<asp:Button id="button1" runat="server" Text="Store" OnClick="b1c" />
		<asp:Button id="button2" runat="server" Text="Retrive" OnClick="b2c" />
		
		<asp:Label id="l1" runat="server" />
		<asp:Label id="l2" runat="server" />
		
		
	</form>
</body>
</html>
