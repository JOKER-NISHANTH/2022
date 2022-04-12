<%@ Page Language="C#" Inherits="radiobuttton.Default" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
	<title>Default</title>
</head>
<body>
	<form id="form1" runat="server">
		<asp:RadioButtonList id="r1" runat="server" >
		 <asp:ListItem Value="male">1</asp:ListItem>
         <asp:ListItem Value="female">2</asp:ListItem>		
		</asp:RadioButtonList>
	
		<asp:ListBox id="d1" runat="server" Width="200"> 
		 <asp:ListItem Value="mca">mca</asp:ListItem>
              <asp:ListItem Value="mphil">mphil</asp:ListItem>	
		      <asp:ListItem Value="phd">phd</asp:ListItem>
		
		</asp:ListBox>
		<asp:Button id="button1" runat="server" Text="Click me!" OnClick="button1Clicked" />
         <asp:Button id="button2" runat="server" Text="Click me!" OnClick="button2Clicked" />
         <asp:Label id="l1" runat="server"/>
         
		</form>
</body>
</html>
