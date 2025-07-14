'use client';

import React from 'react';
import { Container } from '@/src/components/container';
import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v1';

export default function TermsAndConditions() {
  return (
    <>
      <MainHeader version="1" />
      <div className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-2xl font-bold text-center md:text-2xl">Terms and Conditions</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-accent-700 dark:text-accent-300">
                Last Updated: July 13, 2025
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to Euclitics. These Terms and Conditions govern your use of our website and services. 
                By accessing or using our website, you agree to be bound by these Terms. If you disagree with 
                any part of the terms, you may not access the website.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily view the materials on Euclitics&apos;s website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="list-disc pl-6 my-4">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose or for any public display;</li>
                <li>Attempt to reverse engineer any software contained on Euclitics&apos;s website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be 
                terminated by Euclitics at any time. Upon terminating your viewing of these materials or upon 
                the termination of this license, you must destroy any downloaded materials in your possession 
                whether in electronic or printed format.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
              <p>
                The materials on Euclitics&apos;s website are provided on an &apos;as is&apos; basis. Euclitics makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including, without limitation, implied warranties or conditions of merchantability, fitness 
                for a particular purpose, or non-infringement of intellectual property or other violation 
                of rights.
              </p>
              <p>
                Further, Euclitics does not warrant or make any representations concerning the accuracy, 
                likely results, or reliability of the use of the materials on its website or otherwise 
                relating to such materials or on any sites linked to this site.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. Limitations</h2>
              <p>
                In no event shall Euclitics or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising 
                out of the use or inability to use the materials on Euclitics&apos;s website, even if Euclitics 
                or a Euclitics authorized representative has been notified orally or in writing of the 
                possibility of such damage. Because some jurisdictions do not allow limitations on implied 
                warranties, or limitations of liability for consequential or incidental damages, these 
                limitations may not apply to you.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Euclitics&apos;s website could include technical, typographical, or 
                photographic errors. Euclitics does not warrant that any of the materials on its website 
                are accurate, complete, or current. Euclitics may make changes to the materials contained 
                on its website at any time without notice. However, Euclitics does not make any commitment 
                to update the materials.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Links</h2>
              <p>
                Euclitics has not reviewed all of the sites linked to its website and is not responsible 
                for the contents of any such linked site. The inclusion of any link does not imply 
                endorsement by Euclitics of the site. Use of any such linked website is at the user&apos;s own risk.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Modifications</h2>
              <p>
                Euclitics may revise these terms of service for its website at any time without notice. 
                By using this website, you are agreeing to be bound by the then current version of these 
                terms of service.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of 
                the United States and you irrevocably submit to the exclusive jurisdiction of the courts 
                in that location.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="font-medium">
                Email: info@euclitics.com<br />
                Phone: (555) 123-4567<br />
                Address: 123 Tech Lane, Silicon Valley, CA 94000
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
