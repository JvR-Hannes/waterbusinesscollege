import Link from "next/link";

export default function Qualifications() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Divider */}
        <div className="w-26 h-1 bg-blue-600 mx-auto mb-4"></div>

        {/* Primary Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Qualifications
        </h2>

        <div className="text-md text-gray-600 max-w-7xl mx-auto mt-6 space-y-4 text-left">
          <p>
            WBC is preparing to renew the Quality Council for Trades and
            Occupations (QCTO) Accreditation.
          </p>
          <p>
            WBC conducted a pilot training programme for the Water Reticulation
            Practitioner (NQF 04) qualification during 2022-2024. Please refer
            to{" "}
            <Link
              href="/overview-of-the-water-reticulation-qualification-nqf-04-2"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-800"
            >
              WBC Overview
            </Link>{" "}
            {`under the website heading 'WBC Programs Overview' for detailed information on the pilot programme. A video of our prototype laboratory / practical site can be seen by accessing the following YouTube link:`}{" "}
            <a
              href="https://www.youtube.com/watch?v=RndYrlr6L7Q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-800 break-all"
            >
              https://www.youtube.com/watch?v=RndYrlr6L7Q
            </a>
            .
          </p>
          <p>
            WBC currently focuses on implementing various industry-aligned
            skills courses / DIY courses for both the water services and water
            resources sectors. Selected courses are CPD accredited and only
            course participants registered with the respective professional
            bodies (eg. ECSA, SACNASP, etc.) can claim CPD points.
          </p>
        </div>
      </div>
    </section>
  );
}
