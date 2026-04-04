import { useState, useEffect } from 'react';
import type { SkillItemProps } from '@/types/content';
import { toSlug } from "@/lib/utils/toSlug"
const base = import.meta.env.BASE_URL;

export default function SkillItem({ skill }: SkillItemProps) {
    const [expanded, setExpanded] = useState(false);

    const level = Math.ceil(skill.data.domain / 10);

    const toggle = () => {
        setExpanded((prev) => !prev);
    };

    // abrir automáticamente si coincide el hash
    useEffect(() => {
        const hash = window.location.hash.replace("#", "");

        if (hash === skill.data.slug) {
            setExpanded(true);

            // opcional: pequeño scroll suave de ajuste
            setTimeout(() => {
                document
                    .getElementById(skill.data.slug)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        }
    }, []);

    

    return (
        <div className="mb-1">

            <div className="d-flex flex-column gap-2">

                {/* FILA SUPERIOR: TITLE + BUTTON */}
                <div className="d-flex justify-content-between align-items-center">

                    {/* TITLE */}
                    <div style={{ minWidth: 120 }}>
                        <span className="fw-semibold">{skill.data.title}</span>
                    </div>

                    {/* BOTÓN */}
                    <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={toggle}
                    >
                        {expanded ? '−' : '+'}
                    </button>

                </div>

                

            </div>

            {/* DETALLE (lazy render) */}
            {expanded && (
                <div className="mt-2 small text-white-50">
                    {/* BARRA */}
                    <div className="w-100 d-lg-flex align-items-center gap-3">

                        <div className="flex-grow-1">

                            <div className="d-flex gap-1">
                                {[1, 2, 3, 4, 5, 6 ,7, 8, 9, 10].map(i => (
                                    <div
                                        key={i}
                                        className={`flex-fill rounded ${i <= level
                                            ? 'bg-primary'
                                            : 'bg-secondary bg-opacity-25'
                                            }`}
                                        style={{ height: 8 }}
                                    />
                                ))}
                            </div>

                        </div>

                    </div>

                    {/* LABELS */}
                    <div className="d-flex justify-content-between small text-white-50">
                        <span className="text-white text-opacity-25">1</span>

                        <span className="text-white text-opacity-25">10</span>
                    </div>

                    <p>{skill.data.description}</p>

                    {renderList('Challenges faced', skill.data.challenges)}
                    {renderList('Actions Taken', skill.data.actions)}
                    {renderList('Impact Achieved', skill.data.impact)}
                    {renderList(
                        'Projects where this skill was applied',
                        skill.data.projects,
                        (skill.data.projects ?? []).map(p => `${base}projects/${toSlug(p)}`)
                    )}

                </div>
            )}

        </div>
    );
}

// helper UI
function renderList(title: string, items: string[] | undefined, resourceUrl?: string[]) {
    if (!items?.length) return null;

    return (
        <>
            <strong>{title}</strong>
            <ul>
                {items.map((item, i) => <li key={i}>{
                    resourceUrl && resourceUrl[i] ? (
                        <a href={resourceUrl[i]} target="_blank" rel="noopener noreferrer">
                            {item}
                        </a>
                    ) : (
                        item
                    )
                }</li>)}
            </ul>
        </>
    );
}