
namespace navigate
{
	using System;
	using System.Web;
	using System.Web.UI;

	public partial class second : System.Web.UI.Page
	{
		public void button1Clicked (object sender, EventArgs args)
		{

			t1.Text=Request.QueryString ["a"] + Request.QueryString ["b"] ;
		}
	}
}

