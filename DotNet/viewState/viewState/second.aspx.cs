
namespace viewState
{
	using System;
	using System.Web;
	using System.Web.UI;

	public partial class second : System.Web.UI.Page
	{
		public void b1c (object sender, EventArgs args)
		{
			t1.Text=	ViewState ["a"].ToString();
			t2.Text = ViewState ["b"].ToString()  ;
		}

	}
}

