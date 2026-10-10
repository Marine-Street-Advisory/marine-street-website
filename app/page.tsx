import Image from "next/image";
import Nav from "./components/Nav";

export default function Page() {
  return (
    <>
      <Nav />

      <section className="hero" id="top">
        <div className="hero-inner">
          <p className="hero-label settle">Advise &nbsp;·&nbsp; Build &nbsp;·&nbsp; Invest</p>
          <h1 className="settle settle-2">
            Marine Street solves complexity for companies that touch real estate.
          </h1>
          <p className="hero-sub settle settle-3">
            Real estate strategy, technology, and capital, for companies that carry
            real complexity without the team to handle it.
          </p>
          <a href="#contact" className="hero-cta settle settle-4">Let&apos;s Connect</a>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="container">
          <p className="section-label">The Approach</p>
          <div className="approach-grid">
            <p>
              We work in the middle market, with companies and real estate firms that carry
              real complexity without the scale to hire a team against it. We advise, then
              build and implement what the advice actually requires.
            </p>
            <p>
              We pair institutional real estate investing and operating judgment with deep
              systems engineering. That&apos;s how we find where the problem actually sits.
              It&apos;s also why the work carries through the decision and into the systems
              your team runs on every day.
            </p>
          </div>
        </div>
      </section>

      <section className="execute" id="execute">
        <div className="container">
          <p className="section-label">How We Execute</p>
          <h2 className="section-title">Advice, technology, and capital, connected.</h2>
          <ol className="flow">
            <li className="flow-step">
              <span className="flow-mark" aria-hidden="true"><b>{"/"}</b></span>
              <h3>Advise</h3>
              <p>
                Strategic partnership for companies and real estate firms navigating
                complexity. Outsourced CIO and head of real estate roles, board support,
                capital markets strategy and execution, and hands-on technology implementation
                for firms that know they need to move and aren&apos;t sure where to start.
              </p>
            </li>
            <li className="flow-step">
              <span className="flow-mark" aria-hidden="true">{"/"}<b>{"/"}</b></span>
              <h3>Build</h3>
              <p>
                Build is a continuation of the advisory work, so everything we build is
                engineered for that firm and grounded in 20+ years of real estate experience.
                It evolves as the business does. We&apos;re there to help navigate complexity
                across the life of the firm.
              </p>
            </li>
            <li className="flow-step">
              <span className="flow-mark" aria-hidden="true">{"//"}<b>{"/"}</b></span>
              <h3>Invest</h3>
              <p>
                The intersection of real estate and technology that we and our clients live in
                every day, from assets where power and energy drive the value to companies
                building for real estate. We invest alongside the people and platforms we work
                with.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="audience" id="audience">
        <div className="container">
          <p className="section-label">Who It&apos;s For</p>
          <h2 className="section-title">
            Built for principals who need a different kind of partner.
          </h2>
          <p className="audience-intro">
            We act as outsourced leadership and build the systems that help a business scale
            and run more efficiently. Platform growth, leadership transition, technology
            modernization, recapitalization: the work arrives in different forms, for
            owners, operators, investors, lenders, advisors and brokers across the real
            estate ecosystem.
          </p>
          <div className="audience-grid">
            <div className="audience-card">
              <h3>Companies That Use Real Estate</h3>
              <p>
                Multi-site companies whose locations drive the business, often 20 to 150 of
                them, from logistics and 3PL to retail and restaurants. We act as your
                outsourced head of real estate: portfolio strategy, renewals, negotiation and
                site selection, without adding headcount. Behind it sits a single source of
                record. Every lease, site and capital decision lives in one place, with real
                estate intelligence your CEO, CFO and board can rely on.
              </p>
            </div>
            <div className="audience-card">
              <h3>Real Estate Investors &amp; Operators</h3>
              <p>
                LP investors, operators and family offices, with particular focus on firms
                with 5 to 20 deal principals. We work across the firm, from technology strategy
                and implementation to relationship and market intelligence, deal flow and
                diligence, so the context behind every relationship and deal compounds inside
                the firm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="principals" id="principals">
        <div className="container">
          <p className="section-label">Principals</p>
          <p className="principals-lede">
            The largest real estate firms have whole teams building the systems and
            information behind every decision. Most mid-market companies and firms
            don&apos;t, and Marine Street is here to give them that same access, with
            senior judgment behind it.
          </p>
          <div className="principals-grid">
            <div>
              <div className="principal-head">
                <Image src="/jeremy.webp" alt="Jeremy Griffin" width={84} height={104} />
                <div>
                  <h3>Jeremy Griffin</h3>
                  <p className="principal-role">CEO</p>
                  <p className="principal-link">
                    <a href="https://www.linkedin.com/in/jeremy-griffin-a01b491/" target="_blank" rel="noopener noreferrer">
                      LinkedIn &#8599;
                    </a>
                  </p>
                </div>
              </div>
              <p className="principal-bio">
                Jeremy helps companies navigate complex real estate decisions and put
                strategy into practice. He brings twenty years of real estate experience,
                including fourteen in institutional investing and more than $3 billion in
                debt and equity transactions. As Managing Director at Rialto Capital
                Management, he led West Coast investment strategy, following
                earlier roles at J.P. Morgan and
                Macerich. At Marine Street, he helps owners and leadership teams navigate
                shifting markets and identify opportunities to improve the business. He
                develops practical solutions that connect real estate strategy, technology,
                and day-to-day operations.
              </p>
              <p className="principal-meta">
                Capital markets, portfolio strategy, and operating execution.
                <br />
                <strong>MBA, Columbia Business School.</strong>
              </p>
            </div>
            <div>
              <div className="principal-head">
                <Image src="/matt.webp" alt="Matt Fitzgerald" width={84} height={104} />
                <div>
                  <h3>Matt Fitzgerald</h3>
                  <p className="principal-role">CTO</p>
                  <p className="principal-link">
                    <a href="https://www.linkedin.com/in/matthewmaguirefitzgerald/" target="_blank" rel="noopener noreferrer">
                      LinkedIn &#8599;
                    </a>
                  </p>
                </div>
              </div>
              <p className="principal-bio">
                Matt builds the systems that actually change the way teams work—reliable,
                intuitive, and intelligent. He led system architecture for platforms used
                across numerous products, at the nexus of software and hardware. Drawing
                on years in the smart-hardware startup space, he helps businesses distinguish
                what technology makes possible from what will actually prove useful. At
                Marine Street, he embeds industry expertise into scalable, intelligent
                software that fits how a business operates and expands what its teams can do.
              </p>
              <p className="principal-meta">
                System architecture, data systems, infrastructure, tooling, and
                engineering rigor.{' '}
                <strong>MS, Columbia School of Engineering and Applied Sciences.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <p className="section-label">Connect</p>
          <h2 className="section-title">Let&apos;s talk.</h2>
          <p className="contact-body">
            Whether it&apos;s a capital decision, an operation that needs rethinking, or a
            read on where the market is going, we&apos;re glad to hear from you.
          </p>
          <a href="mailto:connect@marine-street.com" className="contact-email">
            connect@marine-street.com
          </a>
          <p className="contact-place">Los Angeles, California</p>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <p>
            &copy; 2026 Marine Street &nbsp;·&nbsp;{" "}
            <a href="https://www.linkedin.com/company/marinestreet/" target="_blank" rel="noopener noreferrer">
              LinkedIn &#8599;
            </a>
          </p>
          <p>Not an offer to sell or the solicitation of an offer to buy securities.</p>
        </div>
      </footer>
    </>
  );
}
