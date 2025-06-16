import RedirectWithSpinner from "@/components/RedirectWithSpinner";

export default function DashboardPage() {
  return (
    <RedirectWithSpinner
      url="https://portal.waterbusinesscollege.co.za/dashboard/"
      newTab={true}
    />
  );
}