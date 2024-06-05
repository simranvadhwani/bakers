import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminNav from "./Navbar/Navbar";
import AdminSidebar from "../AdminComponents/sidebar/sidebar";
import AdminFooter from "../AdminComponents/footer/footer";
import AdminHome from "../AdminComponents/AdminHome/AdminHome";
import LogIn from "../Components/LogIn/LogIn";
import ShowNavbar from "../AdminComponents/ShowNavbar/ShowNavbar";
import ShowFooter from "../AdminComponents/ShowFooter/ShowFooter";
import ShowSidebar from "../AdminComponents/ShowSidebar/ShowSidebar";
import Logout from "../AdminComponents/Logout/Logout";

const AdminTemplate = () => {
  useEffect(() => {
    // Dynamically load Admin specific CSS
    const loadCss = (href) => {
      const cssLink = document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.href = href;
      document.head.appendChild(cssLink);
      return cssLink;
    };

    const adminCss = loadCss("/Admin/plugins/fontawesome-free/css/all.min.css");
    const ioniconsCss = loadCss(
      "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
    );
    const tempusdominusCss = loadCss(
      "/Admin/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
    );
    const icheckBootstrapCss = loadCss(
      "/Admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
    );
    const jqvmapCss = loadCss("/Admin/plugins/jqvmap/jqvmap.min.css");
    const adminlteCss = loadCss("/Admin/dist/css/adminlte.min.css");
    const overlayScrollbarsCss = loadCss(
      "/Admin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
    );
    const daterangepickerCss = loadCss(
      "/Admin/plugins/daterangepicker/daterangepicker.css"
    );
    const summernoteCss = loadCss(
      "/Admin/plugins/summernote/summernote-bs4.min.css"
    );

    // Dynamically load Admin specific JS
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
      return script;
    };
    const momentJs = loadScript("/Admin/plugins/moment/moment.min.js");
    const jqueryJs = loadScript("/Admin/plugins/jquery/jquery.min.js");
    const jqueryUiJs = loadScript("/Admin/plugins/jquery-ui/jquery-ui.min.js");
    const bootstrapJs = loadScript(
      "/Admin/plugins/bootstrap/js/bootstrap.bundle.min.js"
    );
    const chartJs = loadScript("/Admin/plugins/chart.js/Chart.min.js");
    // const sparklineJs = loadScript("/Admin/plugins/sparklines/sparkline.js");
    // const jqvmapJs = loadScript("/Admin/plugins/jqvmap/jquery.vmap.min.js");
    // const jqvmapUsaJs = loadScript(
    //   "/Admin/plugins/jqvmap/maps/jquery.vmap.usa.js"
    // );
    const jqueryKnobJs = loadScript(
      "/Admin/plugins/jquery-knob/jquery.knob.min.js"
    );

    const daterangepickerJs = loadScript(
      "/Admin/plugins/daterangepicker/daterangepicker.js"
    );
    const tempusdominusJs = loadScript(
      "/Admin/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"
    );
    const summernoteJs = loadScript(
      "/Admin/plugins/summernote/summernote-bs4.min.js"
    );
    const overlayScrollbarsJs = loadScript(
      "/Admin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"
    );
    const adminlteJs = loadScript("/Admin/dist/js/adminlte.js");
    // const demoJs = loadScript("/Admin/dist/js/demo.js");
    // const dashboardJs = loadScript("/Admin/dist/js/pages/dashboard.js");

    // Clean up function
    return () => {
      document.body.removeChild(momentJs);
      document.head.removeChild(adminCss);
      document.head.removeChild(ioniconsCss);
      document.head.removeChild(tempusdominusCss);
      document.head.removeChild(icheckBootstrapCss);
      document.head.removeChild(jqvmapCss);
      document.head.removeChild(adminlteCss);
      document.head.removeChild(overlayScrollbarsCss);
      document.head.removeChild(daterangepickerCss);
      document.head.removeChild(summernoteCss);
      document.body.removeChild(jqueryJs);
      document.body.removeChild(jqueryUiJs);
      document.body.removeChild(bootstrapJs);
      document.body.removeChild(chartJs);
      // document.body.removeChild(sparklineJs);
      // document.body.removeChild(jqvmapJs);
      // document.body.removeChild(jqvmapUsaJs);
      document.body.removeChild(jqueryKnobJs);

      document.body.removeChild(daterangepickerJs);
      document.body.removeChild(tempusdominusJs);
      document.body.removeChild(summernoteJs);
      document.body.removeChild(overlayScrollbarsJs);
      document.body.removeChild(adminlteJs);
      // document.body.removeChild(demoJs);
      // document.body.removeChild(dashboardJs);
    };
  }, []);

  return (
    <>
      <ShowNavbar>
        <AdminNav />
      </ShowNavbar>
      <ShowSidebar>
        <AdminSidebar />
      </ShowSidebar>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/admin-dashboard" element={<AdminHome />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <ShowFooter>
        <AdminFooter />
      </ShowFooter>
    </>
  );
};

export default AdminTemplate;
