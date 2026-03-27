export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      checkpoints: {
        Row: {
          confidence: number | null
          created_at: string
          description: string | null
          id: string
          status: string
          title: string
          window_end: string | null
          window_start: string | null
        }
        Insert: {
          confidence?: number | null
          created_at?: string
          description?: string | null
          id?: string
          status?: string
          title: string
          window_end?: string | null
          window_start?: string | null
        }
        Update: {
          confidence?: number | null
          created_at?: string
          description?: string | null
          id?: string
          status?: string
          title?: string
          window_end?: string | null
          window_start?: string | null
        }
        Relationships: []
      }
      convergences: {
        Row: {
          created_at: string
          id: string
          impact_date: string | null
          member_forecast_ids: string[] | null
          probability: number | null
          summary: string | null
          title: string
        }
        Insert: {
          created_at?: string
          id?: string
          impact_date?: string | null
          member_forecast_ids?: string[] | null
          probability?: number | null
          summary?: string | null
          title: string
        }
        Update: {
          created_at?: string
          id?: string
          impact_date?: string | null
          member_forecast_ids?: string[] | null
          probability?: number | null
          summary?: string | null
          title?: string
        }
        Relationships: []
      }
      forecasts: {
        Row: {
          chain: Json | null
          confidence: number
          created_at: string
          evidence_links: Json | null
          falsifiability: string | null
          headline: string
          id: string
          lead_time: string
          stack_ids: string[] | null
          status: string
          trigger: string
        }
        Insert: {
          chain?: Json | null
          confidence?: number
          created_at?: string
          evidence_links?: Json | null
          falsifiability?: string | null
          headline: string
          id?: string
          lead_time: string
          stack_ids?: string[] | null
          status?: string
          trigger: string
        }
        Update: {
          chain?: Json | null
          confidence?: number
          created_at?: string
          evidence_links?: Json | null
          falsifiability?: string | null
          headline?: string
          id?: string
          lead_time?: string
          stack_ids?: string[] | null
          status?: string
          trigger?: string
        }
        Relationships: []
      }
      poll_votes: {
        Row: {
          created_at: string
          id: string
          option: string
          other_text: string | null
          session_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          option: string
          other_text?: string | null
          session_id: string
        }
        Update: {
          created_at?: string
          id?: string
          option?: string
          other_text?: string | null
          session_id?: string
        }
        Relationships: []
      }
      predictions: {
        Row: {
          confidence: number
          convergence_id: string | null
          created_at: string
          evidence_summary: string | null
          falsifiability: string | null
          full_text: string | null
          headline: string
          id: string
          lead_time: string | null
          resolved_at: string | null
          resolved_outcome: string | null
          status: string
          timeframe: string
          trajectory: string
        }
        Insert: {
          confidence?: number
          convergence_id?: string | null
          created_at?: string
          evidence_summary?: string | null
          falsifiability?: string | null
          full_text?: string | null
          headline: string
          id?: string
          lead_time?: string | null
          resolved_at?: string | null
          resolved_outcome?: string | null
          status?: string
          timeframe?: string
          trajectory: string
        }
        Update: {
          confidence?: number
          convergence_id?: string | null
          created_at?: string
          evidence_summary?: string | null
          falsifiability?: string | null
          full_text?: string | null
          headline?: string
          id?: string
          lead_time?: string | null
          resolved_at?: string | null
          resolved_outcome?: string | null
          status?: string
          timeframe?: string
          trajectory?: string
        }
        Relationships: []
      }
      scorecard: {
        Row: {
          forecast_id: string
          id: string
          outcome: string
          reasoning: string | null
          resolved_date: string | null
        }
        Insert: {
          forecast_id: string
          id?: string
          outcome: string
          reasoning?: string | null
          resolved_date?: string | null
        }
        Update: {
          forecast_id?: string
          id?: string
          outcome?: string
          reasoning?: string | null
          resolved_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scorecard_forecast_id_fkey"
            columns: ["forecast_id"]
            isOneToOne: false
            referencedRelation: "forecasts"
            referencedColumns: ["id"]
          },
        ]
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          opted_in: boolean
          unsubscribe_token: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          opted_in?: boolean
          unsubscribe_token?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          opted_in?: boolean
          unsubscribe_token?: string
        }
        Relationships: []
      }
      updates: {
        Row: {
          content: string
          created_at: string
          id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
