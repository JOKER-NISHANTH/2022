
namespace navigate
{
	using System;
	using System.Web;
	using System.Web.UI;

	public partial class Default : System.Web.UI.Page
	{
		
		public void button1Clicked (object sender, EventArgs args)
		{
			Response.Redirect("second.aspx?a=" + t1.Text + "&b=" + t2.Text);
		}
	}
}

