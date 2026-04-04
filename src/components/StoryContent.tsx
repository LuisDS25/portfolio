import { useState } from "react";
import type { StoryContentProps } from "@/types/content";
import { toSlug } from "@/lib/utils/toSlug"

const base = import.meta.env.BASE_URL;

export default function StoryContent({ project } : StoryContentProps) {
    const [section, setSection] = useState("general");

    const renderContent = () => {
        switch (section) {
            case "problem":
                return (
                    <>
                        <h3 className="text-white fs-5">The context</h3>
                        <p className="fs-6 text-white text-opacity-75">{project.data.context}</p>
                        
                        <h3 className="text-white fs-5">Main challenges</h3>

                        <ul>
                            {project.data.challenges.map((c, i) => (
                                <li key={i}>
                                    <p className="fs-6 text-white text-opacity-75">{c}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                )

            case "solution":
                return (
                    <>
                        <h3 className="text-white fs-5">My Approach</h3>
                        <ul>
                            {project.data.decisions.map((d, i) => (
                                <li key={i}>
                                    <p className="fs-6 text-white text-opacity-75">{d}</p>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-white fs-5">Actions Taken</h3>
                        <ul>
                            {project.data.actions.map((a, i) => (
                                <li key={i}>
                                    <p className="fs-6 text-white text-opacity-75">{a}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                )

            case "result":
                return (
                    <>
                        <h3 className="text-white fs-5">The Result</h3>
                        <p className="fs-6 text-white text-opacity-75">{project.data.result}</p>

                        <h3 className="text-white fs-5">The Impact</h3>
                        <ul>
                            {project.data.impact.map((i, idx) => (
                                <li key={idx}>
                                    <p className="fs-6 text-white text-opacity-75">{i}</p>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-white fs-5">What I Learned</h3>
                        <ul>
                            {project.data.learnings.map((l, idx) => (
                                <li key={idx}>
                                    <p className="fs-6 text-white text-opacity-75">{l}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                )

            case "gallery":
                return (
                    <>
                        <div className="container" style={{ maxWidth: "70vh", overflowY: "auto" }}>
                            <div className="d-flex flex-column gap-4">
                                {
                                    project.data.gallery?.map((img) => (
                                        <img
                                            src={`${base}images/${img.image}`}
                                            alt={img.tag}
                                            className="img-fluid rounded shadow-sm"
                                            loading="lazy"
                                        />
                                    ))
                                }
                            </div>
                        </div>

                        <div
                            className="modal fade"
                            id="imageModal"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered modal-xl">
                                <div className="modal-content bg-transparent border-0">

                                    // close button
                                    <button
                                        type="button"
                                        className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>

                                    // image
                                    <div className="modal-body text-center p-0">
                                        <img
                                            id="modalImage"
                                            src=""
                                            className="img-fluid rounded"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                );

            default:
                return (
                    <>
                        <p className="fs-6">{project.data.description}</p>

                        <div className="secondary-info">
                            <small className="badge text-light">Stack: </small>

                            {project.data.stack.map((s, i) => (
                                <span key={i} className="badge bg-dark ms-1">
                                    <a href={`${base}skills#${toSlug(s)}`} className="text-decoration-none">
                                        {s}
                                    </a>
                                </span>
                            ))}
                        </div>
                    </>
                );
        }
    };

    return (
        <>
            {/* HERO CONTENT */}
            <div className="hero-content col-lg-9">
                <div
                    className="hero-scroll-content"
                >
                    {renderContent()}
                </div>
            </div>

            {/* FOOTER NAV */}
            <div className="story-nav-wrapper">
                <div className="story-nav d-flex gap-3">
                    {[
                        { key: "general", label: "General" },
                        { key: "problem", label: "Problem" },
                        { key: "solution", label: "Solution" },
                        { key: "result", label: "Result" },
                        ...(project.data.gallery?.length
                            ? [{ key: "gallery", label: "Gallery" }]
                            : []),
                    ].map((btn) => (
                        <button
                            key={btn.key}
                            className={section === btn.key ? "active" : ""}
                            onClick={() => setSection(btn.key)}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}