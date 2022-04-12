
namespace session
{
	using System;
	using System.Web;
	using System.Web.UI;

	public partial class third : System.Web.UI.Page
	{
		public void b1c (object sender, EventArgs args)
		{
			t1.Text = Session["a"].ToString() + Session["b"].ToString();
		}
	}
}

