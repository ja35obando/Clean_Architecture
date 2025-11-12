import { describe, it, expect } from 'vitest';
import { healthCheck } from '../../src/shared/health';

describe('healthCheck', () => {
  it('returns ok true and includes uptime and timestamp', () => {
    const h = healthCheck();
    expect(h).toBeDefined();
    expect(h.ok).toBe(true);
    expect(typeof h.uptime).toBe('number');
    expect(typeof h.timestamp).toBe('string');
    // timestamp should parse to a valid date
    const d = new Date(h.timestamp);
    expect(isNaN(d.getTime())).toBe(false);
  });
});
