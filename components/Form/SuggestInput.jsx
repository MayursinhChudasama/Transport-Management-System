import { useState, useEffect } from "react";
import Input from "./Input";

/**
 * SuggestInput
 * Wraps the regular <Input> and attaches browser native suggestions (datalist)
 * fetched from /api/suggestions?field=<id> .
 *
 * Usage: Simply replace your import of "./Input" with "./SuggestInput".
 * All props supported by <Input> continue to work (label, id, width, error, ...).
 */
export default function SuggestInput({ id }) {
  
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!id) return;

    async function fetchSuggestions() {
      try {
        const res = await fetch(`/api/suggestions?field=${encodeURIComponent(id)}`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        // Non-blocking – just log and continue with empty list
        console.error("Failed to load suggestions for", id, err);
      }
    }

    fetchSuggestions();
  }, [id]);

  const listId = `${id}-suggestions`;

  return (
    <>
      {/* Forward all props to Input, plus the datalist reference */}
      <Input list={listId} />

      {suggestions.length > 0 && (
        <datalist id={listId}>
          {suggestions.map((value) => (
            <option key={value} value={value} />
          ))}
        </datalist>
      )}
    </>
  );
}
